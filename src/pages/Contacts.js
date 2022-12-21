import React from "react";
import styles from "../styles/contacts.css";

function Contacts() {
  return (
    <div id="contacts">
      <button className="return_button">Вернуться</button>
      <h1 className="contacts_title">Наши контакты</h1>
      <ul className="messangers_box">
        <li className="messangers_box_item" id="messangers_box_item_email">
          <div
            src="."
            alt="Email icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_email_icon"
          ></div>
          <span className="messanger_box_item_text"> example@gmail.com</span>
        </li>
        <li className="messangers_box_item" id="messangers_box_item_telegram">
          <div
            src="."
            alt="Telegram icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_telegram_icon"
          ></div>
          <span className="messanger_box_item_text" type="link">
            @example
          </span>
        </li>
        <li className="messangers_box_item" id="messangers_box_item_viber">
          <div
            src="."
            alt="viber icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_viber_icon"
          ></div>
          <span className="messanger_box_item_text"> +380 000 00 00</span>
        </li>
        <li className="messangers_box_item" id="messangers_box_item_whatsapp">
          <div
            src="."
            alt="Whatsapp icon"
            className="messangers_box_item_icon"
            id="messangers_box_item_whatsapp_icon"
          ></div>
          <span className="messanger_box_item_text">+380 000 00 00</span>
        </li>
      </ul>
      <form action="" id="contacts_contactUsForm">
        <h2 className="contacts_contactUsForm_title">
          Напишите нам прямо сейчас
        </h2>
        <div className="contacts_contactUsForm_inputbox">
          <label
            htmlFor=""
            className="contacts_contactsUsForm_label"
            id="contacts_contactsusform_label1"
          >
            Ваше имя:
            <input
              type="text"
              className="contacts_contactsUsForm_labelinput"
              id="contacts_contactsUsForm_labelinput1"
            />
          </label>

          <label
            htmlFor=""
            className="contacts_contactsUsForm_label"
            id="contacts_contactsusform_label2"
          >
            Ваша почта:
            <input
              type="text"
              colws="5"
              className="contacts_contactsUsForm_labelinput"
              id="contacts_contactsUsForm_labelinput2"
            />
          </label>

          <label
            htmlFor=""
            className="contacts_contactsUsForm_label"
            id="contacts_contactsusform_label3"
          >
            Сообщение:
            <textarea
              rows={1}
              type="text"
              className="contacts_contactsUsForm_labelinput"
              id="contacts_contactsUsForm_labelinput3"
            />
          </label>
        </div>
        <button className="contactUsForm_button">Отправить</button>
      </form>
    </div>
  );
}
export default Contacts;
