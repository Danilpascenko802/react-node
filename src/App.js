import "./App.css";
import firstF from "./firstfunction";
function App() {
  return (
    <body>
      <div class="header">
        <div class="navigation_box">
          <ul class="navigation_list">
            <li id="header_logo" class="navigation_pages"></li>
            <li class="navigation_pages">
              <a class="nav_pages_link">Заказчики</a>
            </li>
            <li class="navigation_pages">
              <a class="nav_pages_link">Мастера</a>
            </li>
            <li class="navigation_pages">
              <a class="nav_pages_link">Контакты</a>
            </li>
          </ul>
          <button class="entrance_btn">
            <a id="entrance_btn_link">Войти</a>
          </button>
        </div>
        <div class="search_box">
          <input
            class="header_search_bar"
            type="text"
            placeholder="  Найди то что ищешь"
          />
          <button class="search_btn"></button>
        </div>
      </div>
      <div id="main_box">
        <ul class="registration_type_list">
          <li class="registration_type_item">
            <a href="" class="registration_type_item_link">
              Ищу мастера
            </a>
          </li>
          <li class="registration_type_item">
            <a href="" class="registration_type_item_link">
              Я мастер
            </a>
          </li>
        </ul>
        <div id="registration_title" class="text">
          Registration
        </div>
        <div id="registration_box">
          <form id="form_box" action="/tutorial/action.html">
            <input
              class="regisrtation_form"
              id="regisrtation_form_email"
              type="text"
              name="firstname"
              placeholder="Почта"
            />
            <input
              class="regisrtation_form"
              id="regisrtation_form_password"
              type="text"
              name="lastname"
              placeholder="Пароль"
            />
          </form>
          <div id="showPass_box">
            <input type="checkbox" id="showPass_box_checkbox" />{" "}
            <div id="showPass_box_text">Показать пароль</div>
          </div>
          <button id="submit_bttn">Enter</button>
        </div>
      </div>
    </body>
  );
}

export default App;
