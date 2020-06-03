import React from 'react';
import usa from './images/usa.jpg';
import india from './images/india.png';
import argentina from './images/argentina.png';
import australia from './images/australia.png';
import austria from './images/austria.png';
import belgium from './images/belgium.png';
import canada from './images/canada.png';
import china from './images/china.png';
import columbia from './images/columbia.png';
import cuba from './images/cuba.png';
import egypt from './images/egypt.png';
import france from './images/france.png';
import germany from './images/germany.png';
import greece from './images/greece.png';
import hongkong from './images/hongkong.png';
import hungary from './images/hungary.png';
import indonesia from './images/indonesia.png';
import ireland from './images/ireland.png';
import israel from './images/israel.jpg';
import italy from './images/italy.png';
import japan from './images/japan.png';
import latvia from './images/latvia.png';
import mexico from './images/mexico.png';
import morocco from './images/morocco.png';
import netherlands from './images/netherlands.png';
import newzealand from './images/newzealand.png';
import nigeria from './images/nigeria.png';
import philippine from './images/philippine.png';
import poland from './images/poland.png';
import portugal from './images/portugal.png';
import romania from './images/romania.png';
import russia from './images/russia.png';
import singapore from './images/singapore.jpg';
import slovakia from './images/slovakia.png';
import southafrica from './images/southafrica.png';
import southkorea from './images/southkorea.png';
import sweden from './images/sweden.png';
import switzerland from './images/switzerland.jpg';
import taiwan from './images/taiwan.png';
import thailand from './images/thailand.png';
import turkey from './images/turkey.png';
import unitedkingdom from './images/unitedkingdom.png';
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";

const Sidebar = () =>{
  const dispatch = useDispatch();
  const Countries = [
    { key: "ar", value: "Argentina", url : argentina },
    { key: "au", value: "Australia",url : australia },
    { key: "at", value: "Austria",url : austria },
    { key: "be", value: "Belgium",url : belgium },
    { key: "ca", value: "Canada",url : canada },
    { key: "us", value: "United States",url : usa },
    { key: "in", value: "India",url : india },
    { key: "cn", value: "China",url : china },
    { key: "co", value: "Columbia",url : columbia },
    { key: "cu", value: "Cuba",url : cuba },
    { key: "eg", value: "Egypt",url : egypt },
    { key: "fr", value: "France",url : france },
    { key: "de", value: "Germany",url : germany },
    { key: "gr", value: "Greece",url : greece },
    { key: "hk", value: "Hongkong",url : hongkong },
    { key: "hu", value: "Hungary",url : hungary },
    { key: "id", value: "Indonesia",url : indonesia },
    { key: "ie", value: "Ireland",url : ireland },
    { key: "il", value: "Israel",url : israel },
    { key: "it", value: "Italy",url : italy },
    { key: "jp", value: "Japan",url : japan },
    { key: "lv", value: "Latvia",url : latvia },
    { key: "mx", value: "Mexico",url : mexico },
    { key: "ma", value: "Morocco",url : morocco },
    { key: "nl", value: "Netherlands",url : netherlands },
    { key: "nz", value: "Newzealand",url : newzealand },
    { key: "ng", value: "Nigeria",url : nigeria },
    { key: "pl", value: "Poland",url : poland },
    { key: "pt", value: "Portugal",url : portugal },
    { key: "ro", value: "Romania",url : romania },
    { key: "ru", value: "Russia",url : russia },
    { key: "sg", value: "Singapore",url : singapore },
    { key: "sk", value: "Slovakia",url : slovakia },
    { key: "za", value: "South Africa",url : southafrica },
    { key: "kr", value: "South Korea",url : southkorea },
    { key: "se", value: "Sweden",url : sweden },
    { key: "ch", value: "Switzerland",url : switzerland },
    { key: "tw", value: "Taiwan",url : taiwan },
    { key: "th", value: "Thailand",url : thailand },
    { key: "tr", value: "Turkey",url : turkey },
    { key: "gb", value: "United Kingdom",url : unitedkingdom },
  ];

  function HideLastDiv(){
    document.getElementById('newsDescription').style.display = "none";
  }

  function bgChange(){
    document.getElementById('change').style.cssText = "background-color:rgb(148, 5, 12);display: inline-block;color:white; font-size:1.7rem;";
  }
  return( 
    <div>
      <div class="mobile-hide">
        <div className="row mb-2">
          {Countries !== null &&
          Countries.map((country) => (
            <>
              <div className="col-3 pl-1 mb-1"><img className="icon" src={country.url} alt="argentina"></img></div>
              <div className="col-9  usa-country" onClick={() => dispatch(fetchNews(country.key))} >{country.value}</div> 
            </>
          ))}
        </div>
      </div>
    </div> 
  ); 
};

export default Sidebar;