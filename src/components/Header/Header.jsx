import "./Header.css";
import logo from "../../assets/img/logo.png";

export const Header = function () {

    return(
        <header className="Header">
            <div className="header">
                <div className="width_50 start">
                    <img id="logoApp" src={logo} name="logo" alt="logo"/>
                </div>
                <div className="headerLinks width_50">
                    <a href="">HOME</a>
                    <a href="">ABOUT US</a>
                    <a href="">CONTACT</a>
                    <a href="">SUPPORT</a>
                    <a href="">DOWNLOAD</a>
                </div>
            </div>
            <div className="width_50">
                <h1 id="slogan">BEST CHATTING APP FOR BUSINESS</h1>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at tellus in quam commodo
                    luctus vitae nec leo. Proin sed lectus vel arcu volutpat molestie eget sit amet est. Nulla maximus
                    pellentesque neque at faucibus.</p>
                <div className="start marg_50">
                    <a href="" className="buttonYellow">LEARN MORE</a>
                </div>
            </div>
        </header>
    );
}