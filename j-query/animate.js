$(".btn").click(function () {
  $(".animate").animate({ left: "500px" });
});
// $(".btn1").click(function () {
//     $(".animate").animate({ right: "500px" });
// });

$(".btn").click(function () {
  $(".animate").animate({ right: "500px" }).css("background-color", "yellow");
});

$(".btn").click(function () {
  $(".animate").animate({ right: "500px" }).css({
    backgroundColor: "green",
    border: "5px solid black",
  });
});

$("#addClass").hover(function () {
  $("#demo").addClass("box");
});

$("#removeClass").hover(function () {
  $("#demo").removeClass("box");
});

$("#toggleClass").hover(function () {
  $("#demo").toggleClass("box");
});


