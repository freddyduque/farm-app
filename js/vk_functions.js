function AlertManagement(condition, Ele, AlertEle, icon, message01, message02) {
  //condition = true (show), condition = false (hide); icon = true (input has icon)/false (input has no icon)
  //alert("condition:" + condition + " Element:" + $(Ele).val() + " icon:" + icon + " Mensaje 01:" + message01 + " Mensaje 02:" + message02);
  if (condition) {
    if (AlertEle != "") {
      $(AlertEle).show();
      $(AlertEle).children("span").html("<strong>" + message01 + "</strong><br>" + message02);
    }
    if (icon) {
      $(Ele).siblings(".custom-glyphicon").css("background-color", "#ebccd1");
      $(Ele).siblings(".custom-glyphicon").css("color", "#a94442");
    }
    $(Ele).css({
      'border-left': '4px solid',
      'border-color': '#ce7e8b'
    });
    ManageFocus(Ele, "error-input");
    return false;
  } else {
    if (AlertEle != "")
      $(AlertEle).hide();
    if (icon) {
      $(Ele).siblings(".custom-glyphicon").css("background-color", "#bbddbd");
      $(Ele).siblings(".custom-glyphicon").css("color", "#3c763d");
    }
    $(Ele).css({
      'border-left': '',
      'border-color': ''
    });
    ManageFocus(Ele, "success-input");
    return true;
  }
}

function ManageFocus(Ele, selector) {
  if (selector == "error-input") {
    $(Ele).addClass(selector);
    $(Ele).removeClass("success-input");
  } else if (selector == "success-input") {
    $(Ele).addClass(selector);
    $(Ele).removeClass("error-input");
  } else {
    $(Ele).removeClass("success-input");
    $(Ele).removeClass("error-input");
  }
}

function ValidateEmail(Ele, option) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    AlertEle = $(Ele).parent().siblings(".alert"),
    RetData = "",
    signup_email = ($(Ele).val()).toLowerCase();
  if (mailformat.test(signup_email)) {
    if (option) {
      var posting = $.post("index.html", {
        signup_email: signup_email
      }, "json");
      posting.done(function (data) {
        $(Ele).attr("validated", data);
        if (data == "true") {
          return AlertManagement(false, Ele, AlertEle, true);
        } else
          return AlertManagement(true, Ele, AlertEle, true, "Ups! Algo salió mal.", "Parece que este Correo ya se encuentra en uso, prueba con otro.");
      });
    } else
      return AlertManagement(false, Ele, AlertEle, true);
  } else
    return AlertManagement(true, Ele, AlertEle, true, "Correo Invalido!", "Verifica nuevamente tu correo.");
}

function ValidateInput(Ele, lvl) {
  //alert("Element: " + $(Ele).attr('id') + " Nivel de Validación: " + lvl);
  var flag = true,
    AlertEle = $(Ele).siblings(".alert"),
    FieldTitle = $("#" + $(Ele).attr("linked-label")).text(),
    just_letters = /^[a-zA-ZÁáÉéÍíÓóÚúÑñ ]+$/;
  if (lvl.indexOf("1") != -1) //validates letters only
    if (!just_letters.test($(Ele).val()))
      flag = false;
    //alert("Element: " + $(Ele).attr("id") + ", flag value: " + flag);
  if (flag)
    return AlertManagement(false, Ele, AlertEle);
  else
    return AlertManagement(true, Ele, AlertEle, false, "Error en el Campo \"" + FieldTitle + "\"", "Verifica que el campo no contenga números ni caracteres especiales");
}

function PassValidation(Ele) {
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
    //$("#" + $(Ele).attr("linked-element")).parent().siblings().hide();
    //ResetEle("#" + $(Ele).attr("linked-element"));
    return AlertManagement(true, Ele, AlertEle, true, "Verifica tú Contraseña!", message);
  } else {
    return AlertManagement(false, Ele, AlertEle, true);
  }
}

function ConfirmPassValidation(Ele) {
  var AlertEle = $(Ele).parent().siblings(".alert");
  //alert("Pass01: " + $(Ele).val() + " Pass02: " + $("#input_signup_pass01").val());
  if ($(Ele).val() != $("#" + $(Ele).attr("linked-element")).val())
    return AlertManagement(true, Ele, AlertEle, true, "Error en Confirmación!", "Verifique que las contraseñas coincidan.");
  else
    return AlertManagement(false, Ele, AlertEle, true);
}

function ResetEle(Ele, AlertEle) {
  $(Ele).siblings(".custom-glyphicon").css("background-color", "");
  $(Ele).siblings(".custom-glyphicon").css("color", "");
  $(Ele).css({
    'border-left': '',
    'border-color': ''
  });
  ManageFocus(Ele);
  $(Ele).val("");
  if (AlertEle != "")
    $(AlertEle).hide();
}

function isEmpty(Ele) {
  return ($(Ele).val() == "") ? true : false;
}

function SimplePassValidation(Ele) {
  return AlertManagement(false, Ele, "", true);
}

function call_modal(Ele, Title, Message) {
  $(Ele).modal('show');
  $(Ele).find("h4#gridSystemModalLabel").html(Title);
  $(Ele).find("p#gridSystemModalBody").html(Message);
}

$(window).load(function () {
  // Animate loader off screen
  $(".loading").fadeOut("slow");
});

$(function () {
  $("#input_login_email").focus();

  $("[data-hide]").on("click", function () {
    $(this).parent().hide();
    ResetEle($("#" + $(this).parent().attr("belongs-to")));
  });

  $("#input_signup_pass01,#input_signup_pass02,#input_ret_signup_pass01,#input_ret_signup_pass02").on("contextmenu", function () {
    return false;
  });

  $(".email").blur(function (event) {
    if (!isEmpty(this))
      if (/signup/i.test($(this).attr("id")))
        ValidateEmail(this, true);
      else
        ValidateEmail(this, false);
    else
      ResetEle(this, $(this).parent().siblings(".alert"));
    return true;
  });

  $("#input_login_password").blur(function (event) {
    if (!isEmpty(this))
      SimplePassValidation(this);
    else
      ResetEle(this);
    return true;
  });

  $(".input_val").blur(function (event) {
    if (!isEmpty(this))
      ValidateInput(this, $(this).attr("val-lvl"));
    else
      ResetEle(this, $(this).siblings(".alert"));
    return true;
  });

  $("#input_signup_pass01,#input_ret_signup_pass01").bind("keyup blur", function (event) {
    if (!isEmpty(this))
      PassValidation(this);
    else
      ResetEle(this, $(this).parent().siblings(".alert"));
    return true;
  });

  $("#input_signup_pass02,#input_ret_signup_pass02").blur(function (event) {
    if (!isEmpty(this))
      ConfirmPassValidation(this);
    else
      ResetEle(this, $(this).parent().siblings(".alert"));
    return true;
  });

  $(".vk-btn-validation").click(function (event) {
    var flag = true,
      val_flag = true,
      EleType = "",
      Ele = "";
    $("#" + $(this).closest('form').attr("id") + " input").each(function () {
      if (!isEmpty(this)) {
        EleType = $(this).attr("type");
        Ele = $(this).attr("id");
        if (EleType == "email")
          if (/signup/i.test(Ele))
            flag = ($(this).attr("validated") == "true") ? true : false;
          else
            flag = ValidateEmail(this, false);
        else if (EleType == "password")
          if (/signup/i.test(Ele)) {
            if (/1/i.test(Ele))
              flag = PassValidation(this);
            else
              flag = ConfirmPassValidation(this);
          } else
            flag = true;
        else if (EleType == "text")
          flag = ValidateInput(this, $(this).attr("val-lvl"));

      } else {
        AlertManagement(true, this, "", true);
        flag = false;
      }
      if (!flag) val_flag = false;
    });
    return val_flag;
  });
});
