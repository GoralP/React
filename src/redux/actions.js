import axios from "axios";

export const fetchNews = () => {
  return dispatch => {
    dispatch({ type: "NEWS_FETCH_PENDING" });

    axios.get("http://newsapi.org/v2/top-headlines?country=us&apiKey=c69fb1e97a5e4b20854c064d9f580c98").then(res => {
      dispatch({ type: "NEWS_FETCH_SUCCESS", news: res.data.articles});
    });
  };
};


