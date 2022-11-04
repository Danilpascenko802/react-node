import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav id="header">
      <div id="navigation_wrapper">
      <ul id="navigation">
        <li className="navigation_item" id="navigation_logo"></li>
        <li className="navigation_item">
          <Link to="/" className="navigation_item_link">
            Главная
          </Link>
        </li>
        <li className="navigation_item">
          <Link to="/сustomers" className="navigation_item_link">
            Заказчики
          </Link>
        </li>
        <li className="navigation_item">
          <Link to="/masters" className="navigation_item_link">
            Мастера
          </Link>
        </li>
        <li className="navigation_item">
          <Link to="/сontacts" className="navigation_item_link">
            Контакты
          </Link>
        </li>
      </ul>
      <button id="enter_button">Войти</button>
      </div>
      <div id="search_box">
        <input
          id="search_box_bar"
          type="text"
          placeholder="Найди то что ищешь"
        />
        <button id="search_btn"></button>
      </div>
    </nav>
  );
}

export default Header;
