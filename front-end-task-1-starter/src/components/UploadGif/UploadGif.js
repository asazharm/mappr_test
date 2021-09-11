import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './UploadGif.css';
import { PropagateLoader } from 'react-spinners';

function UploadGif(props) {
  const [formValid, setFormValid] = useState(false);
  const [formTag, setFormTag] = useState('');
  const [formSource, setFormSource] = useState('');
  const [formFile, setFormFile] = useState();
  const [loading, setLoading] = useState(false);

  const uploadGif = (formData) => {
    // data: {id: "w4mj1dp8vdmeoTYaXA"}
    //
    // meta: {msg: "OK", status: 200}
    setLoading(true);
    setFormValid(false);
    axios.post('https://upload.giphy.com/v1/gifs',
      formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((resp) => {
      if (resp.data.meta.status === 200) {
        props.setFavorite(resp.data.data.id);
        setLoading(false);
        handleCloseBtn();
        props.setGiphyViewType('favorites');
      }
    })
      .catch((resp) => {
        alert('Something went wrong!');
      });
  };

  const handleCloseBtn = () => {
    props.setShowUploadModal(false);
    setFormValid(false);
  };

  const handleChangeFileInput = (event) => {
    setFormFile(event.target.files[0]);
    setFormValid(event.target.files[0].size > 0);
  };

  const handleChangeTagInput = (event) => {
    setFormTag(event.target.value);
  };

  const handleChangeSourceInput = (event) => {
    setFormSource(event.target.value);
  };

  const handleUploadBtn = () => {
    if (formValid) {
      const formData = new FormData();
      formData.append('api_key', props.apiKey);
      formData.append('file', formFile);
      formData.append('tags', formTag);
      formData.append('source_post_url', formSource);
      uploadGif(formData);
    }
  };

  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="uploadModal"
    >
      <Modal.Header className="uploadModal-header">
        <Modal.Title id="contained-modal-title-vcenter">
          Upload a GIF
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="uploadModal-body">
        <h6>The uploaded GIF will automatically appear in favorites</h6>
        <label htmlFor="gif_tags" className="form-label">GIF</label>
        <div className="input-group mb-3">
          <input
            id="gif_input"
            className="form-control"
            type="file"
            accept="image/*"
            multiple={false}
            alt=""
            onChange={handleChangeFileInput}
          />
          { !props.isMobile ? <label className="input-group-text" htmlFor="gif_input">Upload a GIF</label> : ''}
        </div>
        <label htmlFor="gif_tags" className="form-label">Tags</label>
        <div className="input-group mb-3">
          { !props.isMobile ? <span className="input-group-text" id="basic-addon3">exm: pets, cat, meow</span> : ''}
          <input type="text" className="form-control" id="gif_tags" onChange={handleChangeTagInput} value={formTag} aria-describedby="basic-addon3" />
        </div>
        <label htmlFor="gif_source" className="form-label">Source post url</label>
        <div className="input-group mb-3">
          { !props.isMobile ? <span className="input-group-text" id="basic-addon3">exm: http://www.mysite.com/my-post/</span> : ''}
          <input type="text" className="form-control" id="gif_source" onChange={handleChangeSourceInput} value={formSource} aria-describedby="basic-addon3" />
        </div>
      </Modal.Body>
      <Modal.Footer className="uploadModal-footer">
        <PropagateLoader loading={loading} color="#32CD32" css={override} />
        <div className="btn-group" role="group">
          <button className="btn btn-outline-danger" onClick={handleCloseBtn}>Close</button>
          <button className="btn btn-outline-success" disabled={!formValid} onClick={handleUploadBtn}>Upload</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default UploadGif;
