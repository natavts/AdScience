function checkRadio(id) {
  $('html, body').animate({
        scrollTop: $("form").offset().top
    }, 400);
  $("input[name='name']").focus();
  document.getElementById(id).checked = true;
}
