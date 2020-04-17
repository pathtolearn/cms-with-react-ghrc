import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { BlogPostCommentRequest } from "../../CMSService_pb";
import { blogPostServiceClient } from "../../utilities/rpcClients";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const PostComment = ({ bpId, userIdentity, fetchAllBlogPostComments }) => {
  console.log(userIdentity);
  const classes = useStyles();
  const [comment, setComment] = useState("");

  const postComment = () => {
    const req = new BlogPostCommentRequest();
    req.setComment(comment);
    req.setBpId(bpId);
    req.setComParentId(0);
    req.setUserIdentity(userIdentity);

    blogPostServiceClient.createBlogPostComment(req, {}, (err, response) => {
      if (err) console.log("error creating blog post comment", err);
      else {
        console.log(response.toObject());
        fetchAllBlogPostComments();
        // reload comments here
        // reset the state
        setComment("");
      }
    });
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="comment"
        label="Your Comment"
        value={comment}
        fullWidth
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={postComment}>
        Add Comment
      </Button>
    </form>
  );
};

export default PostComment;
