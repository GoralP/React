import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { Header, Sidebar } from "../components";
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";
import Moment from "react-moment";



const Home = () => {

  const dispatch = useDispatch();
  
  const { loading, news } = useSelector(state => ({
    loading: state.newsReducer.loading,
    news: state.newsReducer.news,
  }));

const [singleNews, setsinglenews] = useState({});



function showNewsDescription(){
  document.getElementById('newsDescription').style.display = "block";
}

function mobileDescription(){
  document.getElementById('mobile-news').style.display ="none";
  document.getElementById('mobile-description').style.display ="block";
}

function backToHome(){
  document.getElementById('mobile-news').style.display ="block";
  document.getElementById('mobile-description').style.display ="none";
}




const Countries = [
  { key: "ar", value: "Argentina" },
  { key: "au", value: "Australia" },
  { key: "at", value: "Austria" },
  { key: "be", value: "Belgium" },
  { key: "ca", value: "Canada" },
  { key: "us", value: "United States" },
  { key: "in", value: "India" },
  { key: "cn", value: "China" },
  { key: "co", value: "Columbia" },
  { key: "cu", value: "Cuba" },
  { key: "eg", value: "Egypt" },
  { key: "fr", value: "France" },
  { key: "de", value: "Germany" },
  { key: "gr", value: "Greece" },
  { key: "hk", value: "Hongkong" },
  { key: "hu", value: "Hungary" },
  { key: "id", value: "Indonesia" },
  { key: "ie", value: "Ireland" },
  { key: "il", value: "Israel" },
  { key: "it", value: "Italy" },
  { key: "jp", value: "Japan" },
  { key: "lv", value: "Latvia" },
  { key: "mx", value: "Mexico" },
  { key: "ma", value: "Morocco" },
  { key: "nl", value: "Netherlands" },
  { key: "nz", value: "Newzealand" },
  { key: "ng", value: "Nigeria" },
  { key: "pl", value: "Poland" },
  { key: "pt", value: "Portugal" },
  { key: "ro", value: "Romania" },
  { key: "ru", value: "Russia" },
  { key: "sg", value: "Singapore" },
  { key: "sk", value: "Slovakia" },
  { key: "za", value: "South Africa" },
  { key: "kr", value: "South Korea" },
  { key: "se", value: "Sweden" },
  { key: "ch", value: "Switzerland" },
  { key: "tw", value: "Taiwan" },
  { key: "th", value: "Thailand" },
  { key: "tr", value: "Turkey" },
  { key: "gb", value: "United Kingdom" },
];

const MobileCountryNews=(event)=>{
  console.log(event.target.value)
  dispatch(fetchNews(event.target.value),document.getElementById('mobile-news').style.display ="block",document.getElementById('mobile-description').style.display ="none")
}



return (
    <div className="panda-background container-fluid ">
        <div>
          <Header></Header>
        </div>
      
        <section className="mt-3 row country-border">
          <div class ="tnHead">
            <h2>Country News</h2>
          </div>  
        </section>

        <div className="row mobile-hide">
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
                          <div className="">
                            <div className="news-title-display">{news.title}</div>
                            <div className="read-more"><a href="#1" onClick={() => {setsinglenews(news);showNewsDescription()}} className="read-more-color" >Read More</a></div>
                          </div>
                        </li>
                    ))}
                  </ul>
                </> 
              )}
            </div>

            <div className="col-md-6 shadow  font-weight-bold news-description" id="newsDescription">
              
              <div className="mobile-view-title mb-2 mt-2">{singleNews.title}</div>
              <p className="updatedAt">Updated At: <Moment className="publishedAt" fromNow>{singleNews.publishedAt}</Moment></p>
              <img className="news-img" src={singleNews.urlToImage} />
              <p className="mobile-view-description mt-2">{singleNews.description}</p>
              <p className="mobile-view-description">{singleNews.content}</p>
              <p className="mobile-view-description mx-2">For More Information <a href={singleNews.url} target="_blank">Click here</a></p>
            </div>
          </div>
      
        <div className="desktop-hide mobile-view-font "  >
          <select className="dropdown"  onChange={MobileCountryNews}>
            <option>Select Country</option>
              {Countries !== null &&
              Countries.map((country) => (
                <option value={country.key}>{country.value}</option>
            ))}
          </select>

          <div className=" border shadow  mobile-news-title " id ="mobile-news">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <ul className="ul-list">
                    {news !== null &&
                      news.map(news => (
                        <li className="li-index shadow px-3 pt-2">
                          <div >
                            <div className="news-title-display">{news.title}</div>
                            <div className="read-more"><a href="#1" onClick={() => {setsinglenews(news);mobileDescription()}} className="read-more-color">Read More</a></div>
                          </div>
                        </li>
                    ))}
                  </ul>
                </> 
              )}
            </div>

            <div className="shadow  font-weight-bold mobile-news-description" id="mobile-description">
              
            <button className="btn-info mt-3 btn-home" onClick={backToHome}>Back to Home</button>
              <div className="mobile-title mx-2 mt-2">{singleNews.title}</div>
              <p className="updatedAt">Updated At: <Moment className="publishedAt mx-2" fromNow>{singleNews.publishedAt}</Moment></p>
              <img className="news-img" src={singleNews.urlToImage} />
              <p className="mobile-view-description mt-2 mx-2">{singleNews.description}</p>
              <p className="mobile-view-description mx-2">{singleNews.content}</p>
              <p className="mobile-view-description mx-2">For More Information <a href={singleNews.url}>Click here</a></p>
            </div>


        </div>                


    </div>
       
      
    );

};

export default Home;

