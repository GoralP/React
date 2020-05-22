import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Sidebar } from "../components";
import usa from '../components/images/usa.jpg';

const Home = () => {
    const dispatch = useDispatch();
    const { loading, news } = useSelector(state => ({
      loading: state.newsReducer.loading,
      news: state.newsReducer.news
    }));
  
    // useEffect(() => {
    //   dispatch(fetchNews());
    // }, [dispatch]);
  // return (
  //   <div>
  //     <Header></Header>
  //     <Sidebar></Sidebar>

  //     {loading ? (
  //       <div>Loading...</div>
  //     ) : (
  //       <div className="row mx-3 border pl-2 shadow">
  //         {news !== null &&
  //           news.map(title => (
  //           // <p>{title.title}</p>
  //           <a href={title.url} target="desc">
  //               <p>{title.title}</p>
  //           </a>
  //           ))}
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div>
      <Header></Header>
      
      
        <div className="row ">
          <div className="col-md-2 border">
            <div className="row">
            <div className="col-md-2 "><img className="icon" src={usa} alt="panda"></img></div>
            <div className="col-md-8 usa-country" onClick={() => dispatch(fetchNews())}>USA</div>
            </div>
          </div> 

          {loading ? (
            <div className="col-md-3 border news-title">Loading...</div>
           ) : (
          <div className="col-md-3 border news-title">
              {news !== null &&
              news.map(title => (
                <>
                <p>{title.title}</p>
                </>
              ))}
          </div>
          )}
          <div className="col-md-7 border news-description"></div>
          </div>
    </div>
  );

};

export default Home;
