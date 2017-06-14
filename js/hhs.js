$(document).ready(function() {
  $("#year").html(new Date().getFullYear());

  dropdownEvent("ql");
  dropdownEvent("parents");
  dropdownEvent("staff");
  dropdownEvent("boe");
  dropdownEvent("menus");
});

function toggleArrow(id) {
  setTimeout(function() {
    $("#" + id + "-arrow").toggleClass("fa-caret-down");
    $("#" + id + "-arrow").toggleClass("fa-caret-up");
  }, 400);
}

function dropdownEvent(id) {
  $("#" + id + "-btn").click(function() {
    $("#" + id + "-dropdown").slideToggle(400);
    toggleArrow(id)
  });
}
