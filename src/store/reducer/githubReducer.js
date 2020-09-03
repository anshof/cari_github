const initialState = {
  users: [],
  keyword: "",
};

export default function githubReducer(githubState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...githubState,
        [action.payload.target.name]: action.payload.target.value,
        keyword: action.payload.target.value,
      };
    case "GET_USER":
      return {
        ...githubState,
        users: action.payload,
      };
    case "SEARCH_USERS":
      return {
        ...githubState,
        users: action.payload,
      };
    default:
      return githubState;
  }
}
