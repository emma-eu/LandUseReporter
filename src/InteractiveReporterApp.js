...
          {isDrawn ? (
            <Box sx={{ zIndex: 3001, position: "relative" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1rem', mt: 2 }}>
                Select a classification for this new center:
              </Typography>
              {!dropdownOpen && (
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
              )}
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
                  onOpen={() => setDropdownOpen(true)}
                  onClose={() => setDropdownOpen(false)}
                >
                  <MenuItem value="Industrial District">Industrial District</MenuItem>
                  <MenuItem value="Employment District">Employment District</MenuItem>
                  <MenuItem value="Educational Center">Educational Center</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Special District">Special District</MenuItem>
                </Select>
              </FormControl>
            </Box>
...
