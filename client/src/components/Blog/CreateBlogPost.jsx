import React, { useState, createRef, useEffect, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

import { BlogPostRequest } from "../../CMSService_pb";
import base64ArrayBuffer from "../../utilities/base64ArrayBuffer";
import { AppContext } from "../../utilities/context";
import { blogPostServiceClient } from "../../utilities/rpcClients";

const CreateBlogPost = () => {
  // read state for user identity
  const { state } = useContext(AppContext);
  const { user } = state;
  const history = useHistory();

  const createBlogPostRPC = () => {
    const req = new BlogPostRequest();
    req.setTitle(title);
    req.setDescription(description);
    req.setPictureName(pictureName);
    req.setPicture(picture);
    req.setUserIdentity(user.sub);

    blogPostServiceClient.createBlogPost(req, {}, (err, response) => {
      if (err) console.log("error creating blog post", err);
      else {
        history.push("/main/blog-posts");
      }
    });
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [pictureName, setPictureName] = useState("");

  const fileInputRef = createRef();

  const renderFileInbput = () => {
    return (
      <input
        type="file"
        ref={fileInputRef}
        id="bp-image"
        accept="image/png, image/jpeg"
        style={{ visibility: "hidden" }}
        onChange={onImageSelection}
      />
    );
  };

  const onImageSelection = (event) => {
    const {
      target: { files },
    } = event;
    if (files.length > 0) readFile(files[0]);
  };

  const triggerFileInput = () => {
    const node = fileInputRef.current;
    node.click();
  };

  const readFile = (file) => {
    setPictureName("");
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bytes = new Uint8Array(evt.target.result);
      const base64Image = base64ArrayBuffer(bytes);
      setPicture(base64Image);
    };
    reader.readAsArrayBuffer(file);
  };

  const renderImageTotheScreen = () => {
    return (
      picture && (
        <img
          style={{ width: "90%", height: "30rem", marginLeft: "5rem" }}
          src={`data:image/png;base64,${picture}`}
          alt="BP Image"
        />
      )
    );
  };

  const publishBlogPost = () => {
    createBlogPostRPC();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form className="blog-post-form">
        <div className="form-heading">
          <h1>Blog Post</h1>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={triggerFileInput}
        >
          Load Image
        </Button>
        {renderImageTotheScreen()}
        {renderFileInbput()}
        <TextField
          id="title"
          label="Title"
          value={title}
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="description"
          label="Description"
          value={description}
          multiline
          rows={10}
          fullWidth
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={publishBlogPost}>
          Publish
        </Button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
