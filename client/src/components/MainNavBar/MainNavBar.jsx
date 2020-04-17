import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link, Route, Switch } from "react-router-dom";

import { AppContext } from "../../utilities/context";
import BlogPostList from "../Blog/BlogPostList";
import CreateBlogPost from "../Blog/CreateBlogPost";
import { LOGOUT } from "../../redux/actions/action_types";
import BlogPostView from "../Blog/BlogPostView";
import { useAuth0 } from "../../react-auth0-spa";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customMenuButton: {
    color: "#fff",
  },
}));

const MainNavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // state
  const { state, dispatch } = useContext(AppContext);
  const { userType } = state;

  const { logout } = useAuth0();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    if (userType === "USER") {
      logout();
    }
    dispatch({ type: LOGOUT });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className="custom-link" to="/main/blog-posts">
              Home
            </Link>
            {userType === "USER" && (
              <Link className="custom-link" to="/main/create-blog-post">
                Create Blog Post
              </Link>
            )}
          </Typography>

          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.customMenuButton}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {userType === "USER" && (
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            )}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Place Holders */}
      <Switch>
        <Route path="/main/blog-posts" component={BlogPostList} />
        <Route path="/main/create-blog-post" component={CreateBlogPost} />
        <Route
          path="/main/blog-post-view"
          render={(props) => <BlogPostView {...props} />}
        />
      </Switch>
    </div>
  );
};

export default MainNavBar;
