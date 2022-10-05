function firstF () {
    document.getElementById("submit_bttn").addEventListener("click", function () {
        let registraitionEmail_value = document.getElementById(
          "regisrtation_form_email"
        ).value;
        let registrationPassword_value = document.getElementById(
          "regisrtation_form_password"
        ).value;
        let questionPass = ["Это правельный пароль? - ", registrationPassword_value];
        let questionEmail = ["Это ваша почта? - ", registraitionEmail_value];
        if ((registraitionEmail_value, registrationPassword_value != "")) {
          alert("Проверте правильно ли вы указали свои данные");
          if (alert(questionEmail)) {
            if (alert(questionPass)) {
              alert("Вы прошли регестрацию!");
            } else {
              alert("Введите правельный пароль! блять");
            }
          } else {
            alert("Введите правельный адрес електоронной почты! блять");
          }
        } else {
          alert("Введи свои данные! сука");
        }
        console.log(registraitionEmail_value, registrationPassword_value);
      });
      
}
export default firstF;