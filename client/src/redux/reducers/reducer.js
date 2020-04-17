import {
  LOGIN,
  LOGOUT,
  GUEST_LOGIN,
  FETCH_BLOG_POSTS,
  FETCH_BLOG_POST_COMMENTS,
} from "../actions/action_types";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      const newState = {
        isAuthenticated: true,
        user: action.payload,
        userType: "USER",
      };
      localStorage.setItem("USER", JSON.stringify(newState));
      return {
        ...state,
        ...newState,
      };
    }
    case GUEST_LOGIN: {
      localStorage.setItem("USER", JSON.stringify({ userType: "GUEST" }));
      return {
        ...state,
        userType: "GUEST",
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        userType: null,
      };
    }
    case FETCH_BLOG_POSTS:
      return {
        ...state,
        blogPosts: action.payload,
      };
    case FETCH_BLOG_POST_COMMENTS:
      return {
        ...state,
        blogPostComments: action.payload,
      };
    default:
      return state;
  }
};
