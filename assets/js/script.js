document.addEventListener("DOMContentLoaded", function () {
  const card = $(".sm-card");
  $.appear(card, {});
  card.on("appear", function () {
    $(this).animate({ opacity: "1" }, "slow");
  });
});
