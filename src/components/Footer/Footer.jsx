import "./Footer.css";
import img from "../../assets/img/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/fontawesome-free-solid';

export const Footer = function () {

    return(
        <footer>
            <div className="content-left-footer">
                <img src={img} alt="Logo Here"/>
                <span>dreamstime.com</span>
            </div>
            <div className="content-right-footer">
                <p>ID 159937102 <FontAwesomeIcon icon={faCopyright} /> Vladwel</p>
            </div>
        </footer>
    );
}


