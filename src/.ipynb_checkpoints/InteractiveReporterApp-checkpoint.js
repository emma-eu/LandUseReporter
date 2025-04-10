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
  const [, setView] = useState(null);

  const [open, setOpen] = useState(false);
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
        import("@arcgis/core/layers/GraphicsLayer")
      ]);

      const webmap = new WebMap.default({
        portalItem: { id: "18f4d3e4ab4045a48c80553a693294bb" }, // same webmap
      });

      const view = new MapView.default({
        container: mapRef.current,
        map: webmap,
        center: [-111.787301, 40.221715],
        zoom: 10.5,
        ui: { components: ["zoom", "attribution"] },
      });

      setView(view);

      view.when(async () => {
        view.popup.autoOpenEnabled = false;
        const graphicsLayer = new GraphicsLayer.default({ popupEnabled: false });
        view.map.add(graphicsLayer);

        new Legend({ view, container: legendRef.current });

        const sketch = new Sketch.default({
          layer: graphicsLayer,
          view,
          creationMode: "single",
          updateOnGraphicClick: false,
          visibleElements: {
            createTools: { point: false, polyline: false, rectangle: false, circle: false },
            selectionTools: { "rectangle-selection": false },
            undoRedoMenu: false
          },
          defaultUpdateOptions: {
            tool: "reshape",
            enableRotation: false,
            enableScaling: false,
            preserveAspectRatio: false,
            multipleSelectionEnabled: false
          },
          polygonSymbol: {
            type: "simple-fill",
            color: [0, 255, 255, 0.3],
            outline: { color: [0, 180, 180, 1], width: 2 }
          }
        });

        sketchRef.current = sketch;

        sketch.on("create", (event) => {
          if (event.state === "start") {
            alert("Sketch mode: Click to place vertices. Double-click to finish the shape.");
          }
          if (event.state === "complete") {
            const userGraphic = event.graphic;
            userGraphic.attributes = { tempUserDrawn: true }; // mark the feature as user-drawn
            
            // Allow reshaping the drawn polygon
            sketch.update([userGraphic], {
              tool: "reshape"
            });

            setSelectedFeature(userGraphic);
            setDrawnGeometry(userGraphic.geometry);
            setOpen(true);
          }
        });

        view.on("click", async (event) => {
          const response = await view.hitTest(event);
          const result = response.results.find((r) => r.graphic?.geometry);

          if (result) {
            const graphic = result.graphic;
            const isDrawn = graphic.attributes?.tempUserDrawn === true;

            // Only open popup for user-drawn features
            if (isDrawn) {
              setSelectedFeature(graphic);
              setDrawnGeometry(graphic.geometry);
              setOpen(true);
            }
          }
        });
      });
    };

    loadMap();
  }, []);

  const startDrawing = () => {
    if (sketchRef.current) sketchRef.current.create("polygon");
  };

  const handleSubmit = async () => {
    const [FeatureLayer] = await Promise.all([
      import("@arcgis/core/layers/FeatureLayer")
    ]);

    const responseLayer = new FeatureLayer.default({
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/LandUseResponses/FeatureServer/0", // original feature layer
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const relatedId = selectedFeature?.attributes?.OBJECTID || null;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: relatedId == null ? 1 : 0,
        name,
        organization,
        submittedcomment: comment,
        correct_type: likesProject ? 1 : 0,
        updated_type: priorityLevel,
        submitted_at: new Date().toISOString(),
        related_feature_id: relatedId
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

    setOpen(false);
    if (sketchRef.current && selectedFeature?.attributes?.tempUserDrawn) {
      sketchRef.current.layer.remove(selectedFeature); // remove user-created feature from the map
    }
    setName("");
    setComment("");
    setLikesProject(false);
    setPriorityLevel("");
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  const handleDeleteSketch = () => {
    if (
      selectedFeature &&
      selectedFeature.attributes?.tempUserDrawn === true &&
      sketchRef.current
    ) {
      sketchRef.current.layer.remove(selectedFeature);
    }
    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2}>
      <Box width="100%" maxWidth="1250px">
        <Typography variant="h4" gutterBottom>
          MAG First Draft Significant Land Uses Map Feedback
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary" onClick={startDrawing}>
            Add A Feature
          </Button>
        </Box>

        <Card sx={{ my: 2, mb: 1 }}>
          <CardContent sx={{ height: 500, display: 'flex', position: 'relative' }}>
            <div ref={mapRef} style={{ width: "80%", height: "100%", borderRadius: 2 }} />
            <div ref={legendRef} style={{ width: "20%", minWidth: 200, paddingLeft: 10, overflowY: "auto" }} />
          </CardContent>
        </Card>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
            <DialogTitle>Comment Form</DialogTitle>
            <DialogContent>
              <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />

              <FormControlLabel
                control={<Checkbox checked={likesProject} onChange={(e) => setLikesProject(e.target.checked)} />}
                label="This feature is correctly classified."
                sx={{ mb: 1 }}
              />
              <TextField label="Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />

              <FormControl fullWidth margin="dense">
                <InputLabel>Classification</InputLabel>
                <Select value={priorityLevel} onChange={(e) => setPriorityLevel(e.target.value)} label="Classification">
                  <MenuItem value="Industrial District">Industrial District</MenuItem>
                  <MenuItem value="Employment District">Employment District</MenuItem>
                  <MenuItem value="Educational Center">Educational Center</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Special District">Special District</MenuItem>
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteSketch} color="secondary">Delete Sketch</Button>
              <Button onClick={() => { setOpen(false); }}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
            </DialogActions>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
