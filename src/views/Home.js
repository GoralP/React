import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Sidebar } from "../components";



const Home = () => {
  
  const { loading, news } = useSelector(state => ({
    loading: state.newsReducer.loading,
    news: state.newsReducer.news,
  }));

const [singleNews, setsinglenews] = useState({});


return (
      <div className="panda-background">
        <Header></Header>
        <section className="mt-3">
          <div class ="tnHead">
            <h2>Country News</h2>
          </div>  
        </section>
       
          <div className="row ml-2">
            <div className="col-md-2  country-name">
              <Sidebar></Sidebar>
            </div> 
             
                
                  <div className="col-md-4 border shadow ml-3  news-title">
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <>
                        <ul className="ul-list">
                          {news !== null &&
                            news.map(news => (
                                  <li className="li-index shadow-2xl px-3 pt-2">
                                    <div className="news-title-display">
                                      <div>{news.title}</div>
                                      <div><p onClick={() => setsinglenews(news)} className="read-more">Read more</p></div>
                                    </div>
                                  </li>
                            ))}
                          </ul>
                         </> 
                        )}
                    </div>

                    <div className="col-md-5 border shadow ml-3 font-weight-bold  news-title">
                      <div className="publishedAt"> {singleNews.publishedAt}</div>
                      <div className="read-more">{singleNews.title}</div>
                      <img className="news-img" src={singleNews.urlToImage} />
                      <p className="right-description mt-2">{singleNews.description}</p>
                      <p className="right-description">{singleNews.content}</p>
                    </div>
          </div>
       </div>
    );
};

export default Home;

