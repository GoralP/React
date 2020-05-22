import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usa from './images/usa.jpg';
// import {Image} from 'reactstrap'

const Sidebar = () =>{
    return <div className="row mx-2">
        <div className="col-md-2 border">
            <div className="row">
                <div className="col-md-3 border"><img className="icon" src={usa} alt="panda"></img></div>
                <div className="col-md-8 border">USA</div>
            </div>
            
        </div>
        <div className="col-md-3 border news-title">sdhf</div>
        <div className="col-md-7 border news-description" id="desc">sdhf</div>
    </div>
};

export default Sidebar;