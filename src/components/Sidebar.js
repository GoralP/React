import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    return( 
        <div>
        <div className="row mb-2">
        <div className="col-md-3 border"><img className="icon" src={argentina} alt="argentina"></img></div>
        <div className="col-md-9 border usa-country" onClick={() => dispatch(fetchNews("ar"))}>Argentina</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={australia} alt="australia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("au"))}>Australia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={austria} alt="austria"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("at"))}>Austria</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={belgium} alt="belgium"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("be"))}>Belgium</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={canada} alt="canada"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ca"))}>Canada</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={usa} alt="usa"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("us"))}>United States</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={india} alt="india"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("in"))}>India</div>
        </div>
        
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={china} alt="china"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("cn"))}>China</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={columbia} alt="columbia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("co"))}>Columbia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={cuba} alt="cuba"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("cu"))}>Cuba</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={egypt} alt="egypt"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("eg"))}>Egypt</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={france} alt="france"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("fr"))}>France</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={germany} alt="germany"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("de"))}>Germany</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={greece} alt="greece"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("gr"))}>Greece</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={hongkong} alt="hongkong"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("hk"))}>Hongkong</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={hungary} alt="hungary"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("hu"))}>Hungary</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={indonesia} alt="indonesia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("id"))}>Indonesia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={ireland} alt="ireland"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ie"))}>Ireland</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={israel} alt="israel"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("il"))}>Israel</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={italy} alt="italy"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("it"))}>Italy</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={japan} alt="japan"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("jp"))}>Japan</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={latvia} alt="latvia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("lv"))}>Latvia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={mexico} alt="mexico"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("mx"))}>Mexico</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={morocco} alt="moroccoa"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ma"))}>Morocco</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={netherlands} alt="netherlands"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("nl"))}>Netherlands</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={newzealand} alt="newzealand"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("nz"))}>Newzealand</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={nigeria} alt="nigeria"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ng"))}>Nigeria</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={philippine} alt="philippine"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ph"))}>Philippine</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={poland} alt="poland"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("pl"))}>Poland</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={portugal} alt="portugal"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("pt"))}>Portugal</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={romania} alt="romania"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ro"))}>Romania</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={russia} alt="russia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ru"))}>Russia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={singapore} alt="singapore"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("sg"))}>Singapore</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={slovakia} alt="slovakia"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("sk"))}>Slovakia</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={southafrica} alt="southafrica"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("za"))}>South Africa</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={southkorea} alt="southkorea"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("kr"))}>South Korea</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={sweden} alt="sweden"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("se"))}>Sweden</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={switzerland} alt="switzerland"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("ch"))}>Switzerland</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={taiwan} alt="taiwan"></img></div>
        <div className="col-md-9 usa-country" onClick={() => dispatch(fetchNews("tw"))}>Taiwan</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={thailand} alt="thailand"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("th"))}>Thailand</div>
        </div>
        <div className="row mb-2">
        <div className="col-md-3"><img className="icon" src={turkey} alt="turkey"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("tr"))}>Turkey</div>
        </div>
        <div className="row mb-">
        <div className="col-md-3"><img className="icon" src={unitedkingdom} alt="unitedkingdom"></img></div>
        <div className="col-md-9  usa-country" onClick={() => dispatch(fetchNews("gb"))}>United Kingdom</div>
        </div>
        

      </div>      
       
    );     
   
};

export default Sidebar;