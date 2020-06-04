const initialState = {
  loading: false,
  news: null,
  error: false,
  message: null
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEWS_FETCH_PENDING":
      return { ...state, loading: true, news: null };
    case "NEWS_FETCH_SUCCESS":
      return { ...state, loading: false, news: action.news };
    case "NEWS_FETCH_FAILURE":
      return { ...state, loading: false, error: true,  message: action.message };
    default:
      return { ...state };
  }
};

export default newsReducer;
