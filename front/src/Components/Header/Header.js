import React from 'react';
import './Header.css';

function Header(props) {


    function clicklogo(params) {
        props.setStateConteudo("logo");
    } 
    function clicklogin(params) {
        props.setStateConteudo("login");
    } 
    



    return(
    <header className="appHeader">
        <button className="btnInvi" onClick={clicklogo}>
        <img src="./assets/logo.png" className="headerLogo" alt="logo" /></button>
        <button className="btnInvi headerLogin" onClick={clicklogin}>
        <img src="./assets/loginicon.png" className="headerLogin" alt="Login" /></button>
    </header>
    )
}

export default Header;