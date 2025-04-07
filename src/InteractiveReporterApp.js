import { useEffect, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Legend from "@arcgis/core/widgets/Legend";
import "@arcgis/core/assets/esri/themes/light/main.css";

export default function InteractiveReporterApp() {
  const mapRef = useRef(null);
  const legendRef = useRef(null);
  const sketchRef = useRef(null);
  const drawerRef = useRef(null);
  const [, setView] = useState(null);

  const [openExisting, setOpenExisting] = useState(false);
  const [openDrawn, setOpenDrawn] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [drawnGeometry, setDrawnGeometry] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [likesProject, setLikesProject] = useState(false);
  const [priorityLevel, setPriorityLevel] = useState("");

  useEffect(() => {
    const loadMap = async () => {
      const [MapView, WebMap, Sketch, GraphicsLayer] = await Promise.all([
        import("@arcgis/core/views/MapView"),
        import("@arcgis/core/WebMap"),
        import("@arcgis/core/widgets/Sketch"),
        import("@arcgis/core/layers/GraphicsLayer"),
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "18f4d3e4ab4045a48c80553a693294bb" },
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
        ui: { components: ["zoom", "attribution"] },
      });

      setView(view);

      view.when(() => {
        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- or two fingers on your trackpad to zoom. Click and drag to pan.";
        infoDiv.style.padding = "6px 12px";
        infoDiv.style.background = "rgba(255, 255, 255, 0.9)";
        infoDiv.style.fontSize = "13px";
        infoDiv.style.borderRadius = "4px";
        infoDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        infoDiv.style.maxWidth = "200px";
        infoDiv.style.zIndex = "9999";
        view.ui.add(infoDiv, "top-left");

        const legend = new Legend({ view });
        if (legendRef.current) legend.container = legendRef.current;

        const graphicsLayer = new GraphicsLayer.default();
        view.map.add(graphicsLayer);

        const sketch = new Sketch.default({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          visibleElements: {
            createTools: false,
            selectionTools: false,
            undoRedoMenu: false,
            settingsMenu: false,
            duplicateButton: false,
            trashButton: false
          },
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: {
              color: [0, 180, 180, 1],
              width: 2
            }
          }
        });

        sketchRef.current = sketch;

        sketch.on("create", (event) => {
          if (event.state === "start") {
            alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
          }
          if (event.state === "complete") {
            setDrawnGeometry(event.graphic.geometry);
            setSelectedFeature(null);
            setOpenDrawn(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.attributes);
          if (result) {
            setSelectedFeature(result.graphic);
            setDrawnGeometry(null);
            setOpenExisting(true);
          }
        });
      });
    };

    loadMap();
  }, []);

  const startDrawing = () => {
    if (sketchRef.current) {
      sketchRef.current.create("polygon");
    }
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer"),
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/LandUseResponses/FeatureServer/0",
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: drawnGeometry ? 1 : 0,
        name,
        organization,
        submittedcomment: comment,
        correct_type: likesProject ? 1 : 0,
        updated_type: priorityLevel,
        submitted_at: new Date().toISOString(),
        related_feature_id: selectedFeature?.attributes?.OBJECTID || null
      },
    };

    try {
      const result = await responseLayer.applyEdits({ addFeatures: [newFeature] });
      if (result.addFeatureResults.length > 0 && !result.addFeatureResults[0].error) {
        alert("Feature submitted successfully!");
      } else {
        alert("Submission failed.");
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting feature:", error);
    }

    setOpenExisting(false);
    setOpenDrawn(false);
    setName("");
    setComment("");
    setLikesProject(false);
    setPriorityLevel("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  function renderPopup(isDrawn = false) {
    return (
      <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
        <DialogTitle>Feature Feedback</DialogTitle>
        <DialogContent>
          <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />
          {isDrawn ? (
            <Box sx={{ zIndex: 3001, position: "relative" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem', mt: 2 }}>
                Select a classification for this new center:
              </Typography>
              <FormControl fullWidth margin="dense">
                <InputLabel>Classification</InputLabel>
                <Select
                  value={priorityLevel}
                  onChange={(e) => setPriorityLevel(e.target.value)}
                  label="Classification"
                  MenuProps={{
                    container: drawerRef.current,
                    PaperProps: { style: { zIndex: 3002 } }
                  }}
                  onOpen={() => {
                    const commentField = document.getElementById("comment-field");
                    if (commentField) commentField.style.visibility = "hidden";
                  }}
                  onClose={() => {
                    const commentField = document.getElementById("comment-field");
                    if (commentField) commentField.style.visibility = "visible";
                  }}
                >
                  <MenuItem value="Industrial District">Industrial District</MenuItem>
                  <MenuItem value="Employment District">Employment District</MenuItem>
                  <MenuItem value="Educational Center">Educational Center</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Special District">Special District</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="comment-field"
                label="Comment Here (Optional)"
                fullWidth
                margin="dense"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Box>
          ) : (
            <>
              <FormControlLabel control={<Checkbox checked={likesProject} onChange={(e) => setLikesProject(e.target.checked)} />} label="This feature is correctly classified." />
              <TextField
                id="comment-field"
                label="Comment Here (Optional)"
                fullWidth
                margin="dense"
                multiline
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                sx={{ mt: 1, position: 'relative' }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          {drawnGeometry && sketchRef.current && (
            <Button color="error" onClick={() => {
              const layer = sketchRef.current.layer;
              layer.removeAll();
              setDrawnGeometry(null);
              setOpenDrawn(false);
            }}>
              Delete Feature
            </Button>
          )}
          <Button onClick={() => { isDrawn ? setOpenDrawn(false) : setOpenExisting(false); }}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
        </DialogActions>
      </Box>
    );
  }

  return (
    <>
      <CssBaseline />
      <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2} sx={{ backgroundColor: "transparent" }}>
        <Box width="100%" maxWidth="1250px">
          <Typography variant="h4" gutterBottom>
            MAG First Draft Significant Land Uses Map Feedback
          </Typography>
          <Typography variant="h6" gutterBottom>
            Click on an existing feature to leave a comment on that feature, or click the "ADD A FEATURE" button to draw a new feature on the map. Double-click when you have finished digitizing the new feature.
          </Typography>

          <Box display="flex" gap={2} mb={2}>
            <Button variant="contained" color="primary" onClick={startDrawing}>
              Add A Feature
            </Button>
          </Box>

          <Card sx={{ my: 2, mb: 1, backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent sx={{ height: 500, display: 'flex', position: 'relative', backgroundColor: "transparent" }}>
              <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 2 }} />
              <div ref={legendRef} style={{ width: "20%", minWidth: 200, paddingLeft: 10, overflowY: "auto" }} />
            </CardContent>
          </Card>

          <Drawer
            anchor="right"
            open={openExisting}
            onClose={() => setOpenExisting(false)}
            ModalProps={{ keepMounted: true, disableEnforceFocus: true }}
            sx={{ zIndex: 2000 }}
          >
            <div ref={drawerRef}>
              {renderPopup()}
            </div>
          </Drawer>

          <Drawer
            anchor="right"
            open={openDrawn}
            onClose={() => setOpenDrawn(false)}
            ModalProps={{ keepMounted: true, disableEnforceFocus: true }}
            sx={{ zIndex: 2000 }}
          >
            <div ref={drawerRef}>
              {renderPopup(true)}
            </div>
          </Drawer>
        </Box>
      </Box>
    </>
  );
}
