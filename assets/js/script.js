document.addEventListener("DOMContentLoaded", function () {
  //   const card = $(".sm-card");
  $(".sm-card:in-viewport").animate({ opacity: "1" }, 2000);
  $.appear(".sm-card", {});
  $(".sm-card").on("appear", function () {
    $(this).animate({ opacity: "1" }, 2000);
  });
});
