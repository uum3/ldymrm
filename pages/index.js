import React from 'react'
import axios, { post } from 'axios';
import Router from 'next/router'
import Head from 'next/head'
class SimpleReactFileUpload extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      percentCompleted: 0
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
    this.onUploadProgress = this.onUploadProgress.bind(this)
    this.humanFileSize = this.humanFileSize.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
      Router.push(`/${response.data.id}`)
    })
  }
  onChange(e) {
    console.log(e.target.files[0]);
    this.setState({file:e.target.files[0]})
  }
  onUploadProgress (progressEvent) {
    const percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
    this.setState({percentCompleted})
}
  fileUpload(file){
    const url = 'http://localhost:3000/api/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
		  onUploadProgress: this.onUploadProgress,
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  humanFileSize(bytes, si) {
      var thresh = si ? 1000 : 1024;
      if(Math.abs(bytes) < thresh) {
          return bytes + ' B';
      }
      var units = si
          ? ['kB','MB','GB','TB','PB','EB','ZB','YB']
          : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
      var u = -1;
      do {
          bytes /= thresh;
          ++u;
      } while(Math.abs(bytes) >= thresh && u < units.length - 1);
      return bytes.toFixed(1)+' '+units[u];
  }

  render() {
    return (
      <div>
      <Head>
        <title>uum3 file sharing</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        {this.state.percentCompleted !== 0 && <div style={{border: "1px solid black",  borderRadius: "2px", overflow: "hidden"}}>
          <div style={{height: "20px", width: `${this.state.percentCompleted}%`, background: "black"}}></div>
        </div>}
        <form onSubmit={this.onFormSubmit}>
          <input style={{width: "100%"}} type="file" onChange={this.onChange} />
          <br/>
          <button disabled={this.state.percentCompleted !== 0 ? true : false}>
            Transfer
          </button>
        </form>
      </div>
   )
  }
}



export default SimpleReactFileUpload
