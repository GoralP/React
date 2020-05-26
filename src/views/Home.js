import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchNews } from "../redux/actions";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Sidebar } from "../components";
import {usa,india} from '../components/images/india.png';


const Home = () => {
    // const dispatch = useDispatch();
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
  //           <a href={title.url}>
  //               <p>{title.title}</p>
  //           </a>
  //           ))}
  //       </div>
  //     )}
  //   </div>
  // );


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
  
            {loading ? (
              <div className="col-md-4  ml-3  news-title">Loading...</div>
             ) : (
              <>
                {news !== null && (
                  <>
                  <div className="col-md-4 border shadow ml-3  news-title">
                    <ul className="ul-list">
                      {news !== null &&
                      news.map(title => (
                        <>
                        <div className="">
                          <li className="li-index shadow-2xl px-3 pt-2">
                            <div className="news-title-display">
                              <div>{title.title}</div>
                              <div className="mb-3 py-2" ><a href={title.url} target="display" className="read-more">Read more</a></div>
                            </div>
                        </li>
                        </div>
                      </>
                    ))}
                  </ul>
                </div>

                <iframe  src="" name="display" className="iframe-news-description "></iframe>
               
              
              </>
              )}
              </>
              )}
          </div>
       </div>
    );






};

export default Home;
