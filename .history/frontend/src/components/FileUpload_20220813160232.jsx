import React from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("file", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/uploadFile",
        data: formData,
        // headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response?.data);
    } catch (error) {
      //   console.log(error.response.data);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="file" />
      </form>
    </>
  );
};

export default FileUpload;
