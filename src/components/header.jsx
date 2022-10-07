import React from "react";

function Header() {
  return (
    <div className="header">
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
    </div>
  );
}

export default Header;
