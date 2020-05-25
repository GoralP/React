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
      <div>
        <Header></Header>
       
          <div className="row ">
            <div className="col-md-2 border country-name">
              
              <Sidebar></Sidebar>
            </div> 
  
            {loading ? (
              <div className="col-md-4 border news-title">Loading...</div>
             ) : (
              <>
                {news !== null && (
                  <>
                  <div className="col-md-4 border news-title">
                    <ul>
                      {news !== null &&
                      news.map(title => (
                        <>
                          <li className="li-index">
                            <div className="news-title-display">
                              <div>{title.title}</div>
                              <div className="mb-3" ><a href={title.url} target="display">Read more</a></div>
                            </div>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>

                <iframe  src="" name="display" className="iframe-news-description"></iframe>
               
              
              </>
              )}
              </>
              )}
          </div>
      // </div>
    );






};

export default Home;
