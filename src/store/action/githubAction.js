import axios from "axios";

// function to get keyword from input
export const changeInput = (el) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: "CHANGE_INPUT",
      payload: el,
    });
    let keyword = getState().github.keyword;
    console.log("keyword", keyword);
    await dispatch(getUserRepo(keyword));
  };
};

// Get User Repo
export const getUserRepo = (username) => {
  return async (dispatch) => {
    await axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        dispatch({
          type: "GET_USER",
          payload: response.data,
        });
        console.log("dari action", response.data);
      });
  };
};
