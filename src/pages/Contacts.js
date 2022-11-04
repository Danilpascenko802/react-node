import React from "react";

function Contacts() {
  return (
    <div id="contacts">
      <button className="return_button">Вернуться</button>
      <h1 className="contacts_title">Наши контакты</h1>
      <ul className="messangers_box">
        <li className="messangers_box_item" id="messangers_box_item_email">
          <img
            src="."
            alt="Email icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_email_icon"
          />
          example@gmail.com
        </li>
        <li className="messangers_box_item" id="messangers_box_item_telegram">
          <img
            src="."
            alt="Telegram icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_telegram_icon"
          />
          @example
        </li>
        <li className="messangers_box_item" id="messangers_box_item_viber">
          <img
            src="."
            alt="viber icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_viber_icon"
          />
          +380 000 00 00
        </li>
        <li className="messangers_box_item" id="messangers_box_item_whatsapp">
          <img
            src="."
            alt="Whatsapp icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_whatsapp_icon"
          />
          +380 000 00 00
        </li>
      </ul>
      <form action="" id="contacts_contactUsForm">
        <h2 className="contacts_contactUsForm_title">
          Напишите нам прямо сейчас
        </h2>
        <label htmlFor="">Ваше имя:</label>
        <input type="text" />
        <label htmlFor="">Ваша почта:</label>
        <input type="text" />
        <label htmlFor="">Сообщение:</label>
        <input type="text" />
        <button className="contactUsForm_button">Отправить</button>
      </form>
    </div>
  );
}
export default Contacts;
