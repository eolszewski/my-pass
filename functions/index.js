const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get('/', (req, res) =>
  res.json({
    yolo: 1
  })
);

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);
