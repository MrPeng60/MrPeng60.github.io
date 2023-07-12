const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint to handle checking and recording video source
app.post('/checkVideo', (req, res) => {
  const { id, source } = req.body;

  // Read the JSON file
  fs.readFile('videoData.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    let videoData = JSON.parse(data);

    // Check if the video source has been checked before
    if (videoData.checkedVideos[id]) {
      const result = videoData.checkedVideos[id];
      return res.json({ result });
    }

    // Check if the video source is playable
    const isPlayable = checkVideoPlayable(source);

    // Record the result in the JSON file
    videoData.checkedVideos[id] = isPlayable ? source : 'unplayable';

    // Write the updated data to the JSON file
    fs.writeFile('videoData.json', JSON.stringify(videoData), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.json({ result: videoData.checkedVideos[id] });
    });
  });
});

// Function to check if the video source is playable
function checkVideoPlayable(source) {
  // Your logic to check if the video source is playable
  // You can use libraries like 'is-video' or 'video-url-validator' for validation

  // For demonstration purposes, let's assume all sources are playable
  return true;
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
