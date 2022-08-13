// import express, { urlencoded, json } from "express";
// const app = express();
// const port = 4000;
// import cors from "cors";
// import multer, { memoryStorage } from "multer";
// let rKeyword;

// app.use(urlencoded({ extended: true }));
// app.use(json());

// app.use(cors());

// app.post("/post_name", async (req, res) => {
//   let { name } = req.body;
//   console.log(name);
// });

// app.get("/home", cors(), async (req, res) => {
//   res.send("Try homepage");
// });

// const storage = memoryStorage();

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == "text/plain") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   fileFilter,
//   storage,
// });

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

// // app.post("/uploadFile", cors(), upload.any(), async (req, res, next) => {
// //   const file = req.file;
// //   console.log(req.body);

// //   if (!file) {
// //     const error = new Error("Please upload a file");
// //     error.httpStatusCode = 400;
// //     return next(error);
// //   }
// //   const multerText = Buffer.from(file.buffer).toString("utf-8");

// //   const result = {
// //     fileText: multerText,
// //     name: req.body.name, // adding the name from req.body in the result
// //   };

// //   rKeyword = multerText.split("\r" + "\n");
// //   console.log(multerText);

// //   res.send(result);
// // });

// app.post("/uploadFile", upload.any(), (req, res) => {
//   console.log(req.files);
//   res.send({ sucess: true });
// });

// //Job to resume match porcentage.

// // function mPorcentage(keyword) {
// //   let jKeyword = ["React", "TypeScript", "Flutter", "Express"];
// //   let pCounter = 0;
// //   for (let i = 0; i < keyword.length; i++) {
// //     if (jKeyword.includes(keyword[i])) pCounter++;
// //   }
// //   return "Your match is " + pCounter * 10 + "%";
// // }

// app.get("/keywords", cors(), async (req, rest) => {
//   rest.send(
//     // mPorcentage(rKeyword)
//     [
//       {
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//         BRO: "BRO",
//       },
//     ]
//   );
// });

// app.listen(port, () => {
//   console.log(`Listening @ http://localhost:${[port]}`);
// });

// const express = require("express");
// const multer = require("multer");

import express, { urlencoded, json } from "express";
import multer from "multer";

import PdfParse from "pdf-parse";
import * as fs from "fs";

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

// Single file
app.post("/uploadFile", uploadStorage.single("file"), (req, res) => {
  console.log(req.file);
  return res.send("Single file");
});
//Multiple files
app.post("/upload/multiple", uploadStorage.array("file", 10), (req, res) => {
  console.log(req.files);
  return res.send("Multiple files");
});

let dataBuffer = fs.readFileSync("path to PDF file...");

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
  console.log(data.text);
});

app.listen(4000 || process.env.PORT, () => {
  console.log("Server on...");
});
