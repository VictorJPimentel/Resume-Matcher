import React from 'react'
import axios from 'axios';
 
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.onDrop = (files) => {
            this.setState({files})
          };
        this.state = {files: [],
            selectedFile:'',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
    }
 
    submit(){
        const data = new FormData() 
        data.append('myFile', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        let url = "http://localhost:4000/uploadFile";
 
        axios.post(url, data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.warn(res);
        })

        console.log(data)
 
    }


 
    render(){
        
        {
    
        return (<>
                <div className="container">
             
                    <form>
                        <div class="row">
                        <div class="col">
                            <input className="form-control" type="file" name="myFile" accept=".txt" onChange={this.handleInputChange} />
                        </div>
                        <div class="col">
                            <button type="submit" className="form-control btn btn-dark" onClick={()=>this.submit()}>Submit</button>
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