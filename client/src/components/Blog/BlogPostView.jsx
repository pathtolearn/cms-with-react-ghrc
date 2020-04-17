import React from "react";

import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CommentList from "../Comment/CommentsList";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2rem",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  img: {
    display: "block",
    maxWidth: "100%",
    margin: "auto",
  },
}));

const BlogPostView = () => {
  const location = useLocation();
  const data = location.state;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "center" }}>{data.bpr.title}</h1>
      <img
        className={classes.img}
        src={`data:image/png;base64,${data.bpr.picture}`}
        alt="Just a picture"
      />
      <p>{data.bpr.description}</p>

      <CommentList bpId={data.bpr.bpId} />
    </div>
  );
};
export default BlogPostView;
