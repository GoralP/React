import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import usa from './images/usa.png';

const Sidebar = () =>{
    return <div className="row mx-2">
        <div className="col-md-2 border">
            <div className="row">
            <div className="col-md-3 border"><img className="icon" src={usa} alt="panda image"/></div>
            <div className="col-md-8 border">USA</div>
            </div>
            
        </div>
        <div className="col-md-3 border">sdhf</div>
        <div className="col-md-7 border">sdhf</div>
    </div>
};

export default Sidebar;