import React from "react";
/*import { Component } from "react";*/
import "../styles/App.css";
import { Link } from "react-router-dom";
/*import { Nav, NavMenu, NavLink } from "../style/headerStyle";*/
export default Header;

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./mainPage.jsx">Mainpage</Link>
        </li>
        <li>
          <Link to="./masters.jsx">Masters</Link>
        </li>
      </ul>
    </nav>
  );
}

/*
text_changer.textContent = "Change me bitch!";*/
/*
let func1 = function navLink3() {
  console.log("u did it");
};
let func2 = function func2(){
  console.log("yes")
}
*/
/*<div>
  <ul>
    <li>
      <a href="./mainPage.jsx">1</a>
    </li>
    <li>
      <button id="text" onClick={func2}>Text</button>
    </li>
    <li>
      <button className="button1" onClick={func1}>
        3
      </button>
    </li>
  </ul>
</div>*/
/*

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Default Content"
    }
  }
 
  updateContent = () => {
      this.setState({ message: "Updated Content!"});
  }
 
  render() {
    return (
      <div>
        <div className="">
          { this.state.message }
        </div>
        <div className="text-center">
          <button className="" onClick={this.updateContent}>
            Click Me
          </button>
        </div>
      </div>
    );
  }

}

/* <div className="header">
<div className="navigation_box">
<ul className="navigation_list">
<li id="header_logo" className="navigation_pages"></li>
<li className="navigation_pages">
<a href="../public/index.html" className="nav_pages_link">
Заказчики
</a>
</li>
      <li className="navigation_pages">
      <a href="../public/index.html" className="nav_pages_link">
          Мастера
          </a>
      </li>
      <li className="navigation_pages">
      <a href="../public/index.html" className="nav_pages_link">
          Контакты
        </a>
        </li>
        </ul>
        <button className="entrance_btn">
        <a href="../public/index.html" id="entrance_btn_link">
        Войти
        </a>
        </button>
        </div>
        <div className="search_box">
        <input
        className="header_search_bar"
        type="text"
        placeholder="  Найди то что ищешь"
        />
        <button className="search_btn"></button>
        </div>
        </div> */
/*<>
        <Nav>
        <NavMenu>
        <NavLink to="/mainPage.jsx" activestyle="true">
        Main Page
        </NavLink>
        <NavLink to="/masters.jsx" activestyle="true">
        Мастера
        </NavLink>
        <NavLink to="../contacts.jsx" activestyle="true">
        Контакы
        </NavLink>
    </NavMenu>
    </Nav>
    </>*/
