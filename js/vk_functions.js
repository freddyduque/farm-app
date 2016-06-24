function AlertManagement(condition, Ele, AlertEle, icon = false, message01 = "", message02 = "") {
  //condition = true (show), condition = false (hide); icon = true (input has icon)/false (input has no icon)
  //alert("condition:" + condition + " Element:" + $(Ele).val() + " icon:" + icon + " Mensaje 01:" + message01 + " Mensaje 02:" + message02);
  if (condition) {
    $(AlertEle).show();
    if (icon) {
      $(Ele).siblings(".custom-glyphicon").css("background-color", "#ebccd1");
      $(Ele).siblings(".custom-glyphicon").css("color", "#a94442");
    }
    $(AlertEle).children("span").html("<strong>" + message01 + "</strong><br>" + message02);
  } else {
    $(AlertEle).hide();
    if (icon) {
      $(Ele).siblings(".custom-glyphicon").css("background-color", "#bbddbd");
      $(Ele).siblings(".custom-glyphicon").css("color", "#3c763d");
    }
  }
}

function ValidateEmail(Ele, option) {
  if ($(Ele).val() != "") {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
      AlertEle = $(Ele).parent().siblings(".alert");
    if (mailformat.test($(Ele).val())) {
      if (option) {
        $.post("index.html", {
          signup_email: $(Ele).val()
        }, "json").done(function (data) {
          if (data == "true")
            AlertManagement(false, Ele, AlertEle, true);
          else
            AlertManagement(true, Ele, AlertEle, true, "Ups! Algo salió mal.", "Parece que este Correo ya se encuentra en uso, prueba con otro.");
        });
      } else
        AlertManagement(false, Ele, AlertEle, true);
    } else
      AlertManagement(true, Ele, AlertEle, true, "Correo Invalido!", "Verifica nuevamente tu correo.");
  }
}

function ValidateInput(Ele, lvl = "") {
  //alert("Element: " + $(Ele).attr('id') + " Nivel de Validación: " + lvl);
  var flag = true,
    AlertEle = $(Ele).siblings(".alert"),
    FieldTitle = $("#" + $(Ele).attr("linked-label")).text();
  if ($(Ele).val() != "") {
    if (lvl.indexOf("1") != -1) { //validates letters only
      var just_letters = /^[a-zA-Z]+$/;
      if (!just_letters.test($(Ele).val()))
        flag = false;
    }
    if (flag)
      AlertManagement(false, Ele, AlertEle);
    else
      AlertManagement(true, Ele, AlertEle, false, "Error en el Campo \"" + FieldTitle + "\"", "Verifica que el campo no contenga números ni caracteres especiales");
  }
}

function ValidatePass(Ele) {
  var flag = true,
    message = "Esta debe contener:",
    AlertEle = $(Ele).parent().siblings(".alert");
  if ($(Ele).val().length < 8) {
    message = message + "<br> * Al menos 8 caracteres";
    flag = false;
  }
  re = /[0-9]/;
  if (!re.test($(Ele).val())) {
    message = message + "<br> * Al menos un número";
    flag = false;
  }
  re = /[a-z]/;
  if (!re.test($(Ele).val())) {
    message = message + "<br> * Al menos una letra minúscula";
    flag = false;
  }
  re = /[A-Z]/;
  if (!re.test($(Ele).val())) {
    message = message + "<br> * Al menos una letra mayúscula";
    flag = false;
  }
  if (!flag) {
    $("#input_signup_pass02").attr('disabled', 'disabled');
    $("#input_signup_pass02").parent().siblings().hide();
    ResetEle("#input_signup_pass02");
    AlertManagement(true, Ele, AlertEle, true, "Verifica tú Contraseña!", message);
  } else {
    $("#input_signup_pass02").removeAttr('disabled');
    AlertManagement(false, Ele, AlertEle, true);
  }
}

function ValidateConfirmPass(Ele) {
  var AlertEle = $(Ele).parent().siblings(".alert");
  //alert("Pass01: " + $(Ele).val() + " Pass02: " + $("#input_signup_pass01").val());
  if ($(Ele).val() != ($("#input_signup_pass01")).val())
    AlertManagement(true, Ele, AlertEle, true, "Error en Confirmación!", "Verifique que las contraseñas coincidan.");
  else
    AlertManagement(false, Ele, AlertEle, true);
}

function ResetEle(Ele) {
  $(Ele).siblings(".custom-glyphicon").css("background-color", "");
  $(Ele).siblings(".custom-glyphicon").css("color", "");
  $(Ele).val("");
}
$(function () {
  $("#input_login_email").focus();
  $("[data-hide]").on("click", function () {
    $(this).parent().hide();
    ResetEle($("#" + $(this).parent().attr("belongs-to")));
  });
  $(".email").focusout(function (event) {
    if (/signup/i.test($(this).attr("id")))
      ValidateEmail(this, true);
    else
      ValidateEmail(this, false);
  });
  $(".input_val").focusout(function (event) {
    ValidateInput(this, $(this).attr("val-lvl"));
  });
  $("#input_signup_pass01").keyup(function (event) {
    ValidatePass(this);
  });
  $("#input_signup_pass02").focusout(function (event) {
    ValidateConfirmPass(this);
  });
  $("#input_signup_pass01,#input_signup_pass02").on("contextmenu", function () {
    return false;
  });
});
