import jsonPlaceholder from "../apis/jsonPlaceholder";
// Request and dispatching an action will go inside the action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    // console.log(response);
    dispatch({
        type : 'FETCH_USER',
        payload : response.data 
    })
};
