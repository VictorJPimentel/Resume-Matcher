import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDropzone } from "react-dropzone";

import FileUpload from "./components/FileUpload";

function App() {
  // const [ name, setName ] = useState("")
  // const [home, setHome] = useState("")
  const [keywords, setKey] = useState("");
  const [database, setDatabase] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/keywords").then(function (response) {
      setKey(response.data);
    });
  });

  useEffect(() => {
    axios.get("http://localhost:4000/database").then(function (response) {
      setDatabase(response.data);
    });
  });

  // useEffect(() => {
  //   axios.get("http://localhost:4000/home").then(function(response){
  //     setHome(response.data)
  //   })
  // })

  // async function postName(e) {
  // 	e.preventDefault()
  // 	try {
  // 		await axios.post("http://localhost:4000/post_name", {
  // 			name
  // 		})
  // 	} catch (error) {
  // 		console.error(error)
  // 	}
  // }

  // /* <form onSubmit={postName}>
  //                       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  //                       <button type="submit">Send Name</button>
  //                   </form> */

  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <>
      <header>
        <h2 className="text-blue-300"> RESUME TO JOB MATCHER</h2>
        {/* <nav>
      <li> About</li>
      <li> Contact</li>
      <li> Work</li>
    </nav> */}
      </header>

      <div className="hero-content-area">
        <h1>Scan resume now!</h1>
        <FileUpload />
        <h3>{keywords}</h3>
        <h3>{database}</h3>
      </div>
      <h4>
        <ul>
          <li>Step 1: upload skill set below</li>
          <li>Step 2: Wait for matching porcentage</li>
        </ul>
      </h4>
    </>
  );
}

export default App;
