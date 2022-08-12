import express, { urlencoded, json } from "express";
const app = express();
const port = 4000;
import cors from "cors";
import multer, { memoryStorage } from "multer";
let rKeyword;

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors());

app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});

app.get("/home", cors(), async (req, res) => {
  res.send("Try homepage");
});

const storage = memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "text/plain") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  fileFilter,
  storage,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post(
  "/uploadFile",
  cors(),
  upload.single("myFile"),
  async (req, res, next) => {
    const file = req.file;

    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    const multerText = Buffer.from(file.buffer).toString("utf-8");

    const result = {
      fileText: multerText,
      name: req.body.name, // adding the name from req.body in the result
    };

    rKeyword = multerText.split("\r" + "\n");

    res.send(result);
  }
);

//Job to resume match porcentage.

function mPorcentage(keyword) {
  let jKeyword = ["React", "TypeScript", "Flutter", "Express"];
  let pCounter = 0;
  for (let i = 0; i < keyword.length; i++) {
    if (jKeyword.includes(keyword[i])) pCounter++;
  }
  return "Your match is " + pCounter * 10 + "%";
}

app.get("/keywords", cors(), async (req, rest) => {
  rest.send("BRO");
});

app.listen(port, () => {
  console.log(`Listening @ http://localhost:${[port]}`);
});
