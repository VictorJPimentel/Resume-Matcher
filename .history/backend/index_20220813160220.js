const multer = require("multer");
const express = require("express");
const fs = require("fs");
const pdf = require("pdf-parse");

const cors = require("cors");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

// Single file
app.post("/uploadFile", uploadStorage.single("file"), (req, res) => {
  console.log(req.file);

  let dataBuffer = fs.readFileSync(
    "uploads/1660281389678-VictorP-Resume (2).pdf"
  );

  pdf(dataBuffer).then(function (data) {
    // number of pages
    console.log(data.numpages);
    // number of rendered pages
    console.log(data.numrender);
    // PDF info
    console.log(data.info);
    // PDF metadata
    console.log(data.metadata);
    // PDF.js version
    // check https://mozilla.github.io/pdf.js/getting_started/
    console.log(data.version);
    // PDF text
    console.log();

    res.send(data.text);
  });

  return;
});

app.listen(4000 || process.env.PORT, () => {
  console.log("Server on...");
});
