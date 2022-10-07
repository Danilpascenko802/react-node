import React from "react";
function Registration() {
  return (
    <div id="main_box">
      <div id="registration_title" className="text">
        Registration
      </div>
      <div id="registration_box">
        <form id="form_box" action="/tutorial/action.html">
          <input
            className="regisrtation_form"
            id="regisrtation_form_email"
            type="text"
            name="firstname"
            placeholder="Почта"
          />
          <input
            className="regisrtation_form"
            id="regisrtation_form_password"
            type="text"
            name="lastname"
            placeholder="Пароль"
          />
        </form>
        <div id="showPass_box">
          <input type="checkbox" id="showPass_box_checkbox" />
          <div id="showPass_box_text">Показать пароль</div>
        </div>
        <button id="submit_bttn" onClick={enterF}>
          Enter
        </button>
      </div>
    </div>
  );
}

function enterF() {
  console.log("U clicked enter");
}

export default Registration;
