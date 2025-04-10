import { useEffect, useRef, useState } from "react";
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
        portalItem: { id: "18f4d3e4ab4045a48c80553a693294bb" }, // your webmap
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
        const graphicsLayer = new GraphicsLayer.default({ popupEnabled: false });
        view.map.add(graphicsLayer);

        const infoDiv = document.createElement("div");
        infoDiv.innerHTML = "🛈 Use the +/- or two fingers on your trackpad to zoom. Click and drag to pan.";
        infoDiv.style.padding = "6px 12px";
        infoDiv.style.background = "rgba(255, 255, 255, 0.9)";
        infoDiv.style.fontSize = "13px";
        infoDiv.style.borderRadius = "4px";
        infoDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
        infoDiv.style.maxWidth = "200px";
        view.ui.add(infoDiv, "top-left");

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

            sketch.update([userGraphic], { tool: "reshape" });

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

            if (isDrawn) {
              setSelectedFeature(graphic);
              setDrawnGeometry(graphic.geometry);
              setOpen(true);
            } else {
              const clonedGeometry = graphic.geometry.clone();
              const commentGraphic = {
                geometry: clonedGeometry,
                attributes: {
                  feature_origin: 0, // Mark as comment on existing feature
                  OBJECTID: graphic.attributes?.OBJECTID // Link to original feature
                }
              };
              setSelectedFeature(commentGraphic);
              setDrawnGeometry(clonedGeometry);
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
      url: "https://services6.arcgis.com/MLUVmF7LMfvzoHjV/arcgis/rest/services/LandUseResponses/FeatureServer/0", // your feature layer
    });

    const geometry = selectedFeature?.geometry || drawnGeometry;
    if (!geometry) return;

    const relatedId = selectedFeature?.attributes?.OBJECTID || null;
    const featureOrigin = selectedFeature?.attributes?.tempUserDrawn ? 1 : 0;

    const newFeature = {
      geometry,
      attributes: {
        feature_origin: featureOrigin,
        name,
        organization,
        submittedcomment: comment,
        correct_type: likesProject ? 1 : 0,
        updated_type: priorityLevel,
        submitted_at: new Date().toISOString(),
        related_feature_id: relatedId // Link the new feature to the original feature
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
      !selectedFeature.attributes?.OBJECTID &&
      sketchRef.current
    ) {
      sketchRef.current.layer.remove(selectedFeature); // Remove the user-drawn feature
    }
    setOpen(false);
    setSelectedFeature(null);
    setDrawnGeometry(null);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4} pb={2}>
      <Box width="100%" maxWidth="1250px" display="flex" flexDirection="row" justifyContent="space-between">
        {/* Left Column: Map and Instructional Text */}
        <Box sx={{ width: "80%", height: "500px" }}>
          <Card>
            <CardContent sx={{ height: "100%", position: "relative" }}>
              <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
            </CardContent>
          </Card>
        </Box>

        {/* Right Column: Sidebar Legend */}
        <Box sx={{ width: "20%", minWidth: "250px", overflowY: "auto" }}>
          <div ref={legendRef}></div>
        </Box>
      </Box>

      {/* Title and Feedback Button */}
      <Typography variant="h4" sx={{ mt: 3 }}>MAG First Draft Significant Land Uses Map Feedback</Typography>
      <Box display="flex" gap={2} mt={2}>
        <Button variant="contained" color="primary" onClick={startDrawing}>
          Add A Feature
        </Button>
      </Box>

      {/* Drawer for Feedback Form */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 360, pt: 2, px: 2, pb: 1 }} role="presentation">
          <DialogTitle>Comment Form</DialogTitle>
          <DialogContent>
            <TextField label="Your Name" fullWidth margin="dense" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Your City/Organization" fullWidth margin="dense" value={organization} onChange={(e) => setOrganization(e.target.value)} />

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem', mt: 2 }}>
              If you drew this feature, please provide its classification from the options below:
            </Typography>

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

            <TextField label="Comment Here (Optional)" fullWidth margin="dense" multiline rows={4} value={comment} onChange={(e) => setComment(e.target.value)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteSketch} color="secondary">
              DELETE SKETCH
            </Button>
            <Button onClick={() => { setOpen(false); }}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained" color="primary">Submit Feedback</Button>
          </DialogActions>
        </Box>
      </Drawer>
    </Box>
  );
}
