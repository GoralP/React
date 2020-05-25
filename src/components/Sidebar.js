import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usa from './images/usa.jpg';
import india from './images/india.png';
import argentina from './images/argentina.png';
import australia from './images/australia.png';
import austria from './images/austria.png';
import belgium from './images/belgium.png';
import canada from './images/canada.png';
// import {Image} from 'reactstrap'
import { useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions";

const Sidebar = () =>{
    const dispatch = useDispatch();
    return( 
        <div>
         <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={argentina} alt="argentina"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("ar"))}>ARGENTINA</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={australia} alt="australia"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("au"))}>AUSTRALIA</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={austria} alt="austria"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("at"))}>AUSTRIA</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={belgium} alt="belgium"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("be"))}>BELGIUM</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={canada} alt="canada"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("ca"))}>CANADA</div>
        </div>
    <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={usa} alt="usa"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("us"))}>USA</div>
    </div>
    <div className="row">
        <div className="col-md-3 "><img className="icon" src={india} alt="india"></img></div>
        <div className="col-md-7 usa-country" onClick={() => dispatch(fetchNews("in"))}>INDIA</div>
    </div>
      </div>      
       
    );     
   
};

export default Sidebar;