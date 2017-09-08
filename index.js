function checkRadio(id) {
  console.log(id);
  $('html, body').animate({
        scrollTop: $("#formSection").offset().top
    }, 400);
  $("input[name='name']").focus();
  document.getElementById(id).checked = true;
}
