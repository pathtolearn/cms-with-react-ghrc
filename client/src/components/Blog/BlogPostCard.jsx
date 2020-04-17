import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    minWidth: 800,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  mTop: {
    marginTop: "2rem",
  },
});

const BlogPostCard = ({ ...data }) => {
  const classes = useStyles();
  const history = useHistory();

  const readMore = (data) => {
    history.push("/main/blog-post-view", data);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.mTop}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`data:image/png;base64,${data.bpr.picture}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.bpr.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.bpr.description.substring(0, 100)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {data.name}
          </Button>
          <Button size="small" color="primary" onClick={() => readMore(data)}>
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogPostCard;
