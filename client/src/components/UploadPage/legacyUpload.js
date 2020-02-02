import React from "react";
import { Link } from "react-router-dom";
import S3 from "react-aws-s3";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      file: {},
      data: {
        bucket: "",
        key: "",
        location: "",
        status: ""
      }
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    let file = this.fileInput.current.files[0];
    let newFileName = this.fileInput.current.files[0].name;
    this.setState(file);
    console.log(file);
    console.log(newFileName);
    const config = {
      //  insert config here
    };
    const ReactS3Client = new S3(config);
    console.log(file);
    ReactS3Client.uploadFile(file, newFileName).then(data =>
      this.setState(data)
    );
  }

  render() {
    return (
      <div className='grid-option'>
        <div className='upload-title'>STEP: 1</div>
        <form className='upload-steps' onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type='file' ref={this.fileInput} />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>

        <Link className='content-link' to={this.state.data.location}>
          New Link
        </Link>
      </div>
    );
  }
}

export default Upload;
