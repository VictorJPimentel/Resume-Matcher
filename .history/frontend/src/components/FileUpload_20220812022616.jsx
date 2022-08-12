// import React from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// class FileUpload extends React.Component {
//   constructor() {
//     super();
//     this.toastId = React.createRef();
//     this.onDrop = (files) => {
//       this.setState({ files });
//     };
//     this.state = { files: [], selectedFile: "" };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({
//       selectedFile: event.target.files[0],
//     });

//     const data = new FormData();
//     data.append("myFile", this.state.selectedFile);
//     // console.warn(this.state.selectedFile);
//     let url = "http://localhost:4000/uploadFile";
//     toast("Upload in Progress");
//     axios
//       .request({
//         method: "post",
//         url: url,
//         data: data,
//         onUploadProgress: (p) => {
//           const progress = p.loaded / p.total;

//           // check if we already displayed a toast
//           if (this.toastId.current === null) {
//             this.toastId.current = toast("Upload in Progress", { progress });
//             console.log("1 This is working");
//           } else {
//             console.log("2 This is working");
//             toast.update(this.toastId.current, { progress });
//           }
//         },
//       })
//       .then((res) => {
//         // then print response status
//         toast.done(this.toastId.current);
//         console.log("3 This is working");
//         // console.warn(res);
//       });
//   }

//   submit() {
//     const data = new FormData();
//     data.append("myFile", this.state.selectedFile);
//     // console.warn(this.state.selectedFile);
//     let url = "http://localhost:4000/uploadFile";
//     toast("Upload in Progress");
//     axios
//       .request({
//         method: "post",
//         url: url,
//         data: data,
//         onUploadProgress: (p) => {
//           const progress = p.loaded / p.total;

//           // check if we already displayed a toast
//           if (this.toastId.current === null) {
//             this.toastId.current = toast("Upload in Progress", { progress });
//             console.log("1 This is working");
//           } else {
//             console.log("2 This is working");
//             toast.update(this.toastId.current, { progress });
//           }
//         },
//       })
//       .then((res) => {
//         // then print response status
//         toast.done(this.toastId.current);
//         console.log("3 This is working");
//         // console.warn(res);
//       });

//     // console.log(data);
//   }

//   render() {
//     {
//       return (
//         <>
//           <div className="container">
//             <form>
//               <div class="row">
//                 <div class="col">
//                   <input
//                     className="form-control"
//                     type="file"
//                     name="myFile"
//                     accept=".txt"
//                     onChange={this.handleInputChange}
//                   />
//                 </div>
//                 <div class="col">
//                   <button
//                     type="submit"
//                     className="form-control btn btn-dark"
//                     onClick={() => this.submit()}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </>
//       );
//     }
//   }
// }

// export default FileUpload;

import React from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log("Bro");
    console.log(selectedFile);
    formData.append("file", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      //   console.log(error.response.data);
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onDrop = React.useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    console.log("Bro");
    console.log(selectedFile);
    formData.append("file", selectedFile);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/uploadFile",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      //   console.log(error.response.data);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect} />
        <input type="submit" value="file" />
      </form>
    </>
  );
};

export default FileUpload;
