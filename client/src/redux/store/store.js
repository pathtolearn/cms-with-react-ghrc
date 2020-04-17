const userInfo = localStorage.getItem("USER");

export const initialState = {
  isAuthenticated: userInfo ? JSON.parse(userInfo).isAuthenticated : false,
  user: userInfo ? JSON.parse(userInfo).user : null,
  userType: userInfo ? JSON.parse(userInfo).userType : null,
};
