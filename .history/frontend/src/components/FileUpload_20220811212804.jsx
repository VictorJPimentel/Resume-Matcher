import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class FileUpload extends React.Component {
  constructor() {
    super();
    this.toastId = React.createRef();
    this.onDrop = (files) => {
      this.setState({ files });
    };
    this.state = { files: [], selectedFile: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  submit() {
    const data = new FormData();
    data.append("myFile", this.state.selectedFile);
    console.warn(this.state.selectedFile);
    let url = "http://localhost:4000/uploadFile";

    axios
      .request({
        method: "post",
        url: url,
        data: data,
        onUploadProgress: (p) => {
          const progress = p.loaded / p.total;

          // check if we already displayed a toast
          if (this.toastId.current === null) {
            this.toastId.current = toast("Upload in Progress", { progress });
            console.log("1 This is working");
          } else {
            console.log("2 This is working");
            toast.update(this.toastId.current, { progress });
          }
        },
      })
      .then((res) => {
        // then print response status
        toast.done(this.toastId.current);
        console.warn(res);
      });

    console.log(data);
  }

  render() {
    {
      return (
        <>
          <div className="container">
            <form>
              <div class="row">
                <div class="col">
                  <input
                    className="form-control"
                    type="file"
                    name="myFile"
                    accept=".txt"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="col">
                  <button
                    type="submit"
                    className="form-control btn btn-dark"
                    onClick={() => this.submit()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      );
    }
  }
}

export default FileUpload;
