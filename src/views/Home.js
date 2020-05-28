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

function showNewsDescription(){
  document.getElementById('newsDescription').style.display = "block";
}


return (
    <div className="panda-background container-fluid ">
        <div>
          <Header></Header>
        </div>
      
        <section className="mt-3">
          <div class ="tnHead">
            <h2>Country News</h2>
          </div>  
        </section>

        <div className="row   ">
            <div className="col-md-2  country-name">
              <Sidebar></Sidebar>
            </div> 
            
            <div className="col-md-4 border shadow   news-title">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <ul className="ul-list">
                    {news !== null &&
                      news.map(news => (
                        <li className="li-index shadow px-3 pt-2">
                          <div className="news-title-display">
                            <div>{news.title}</div>
                            <div><a href="#1" onClick={() => {setsinglenews(news);showNewsDescription()}} className="read-more">Read more</a></div>
                          </div>
                        </li>
                    ))}
                  </ul>
                </> 
              )}
            </div>

            <div className="col-md-6 shadow  font-weight-bold news-description" id="newsDescription">
              <div className="publishedAt">{singleNews.publishedAt}</div>
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

