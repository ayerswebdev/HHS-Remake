$(document).ready(function() {
  $("#year").html(new Date().getFullYear());

  $("#ql-btn").click(function() {
    if(!window.matchMedia("(min-width: 1024px)").matches) {
      $("#ql-dropdown").slideToggle(400);
      setTimeout(function() {
        $("#ql-arrow").toggleClass("fa-caret-down");
        $("#ql-arrow").toggleClass("fa-caret-up");
      }, 400)
    }
  });
});
