// width javascript vanila
$(document).ready(function () {
    $(".menu-bar").click(function (e) { 
        e.preventDefault();
        $("#mynav").toggleClass("responsive");
    });
});
// width jquery
// function barIcon() {
//     var x = document.getElementById("mynav")
//     if (x.className =="menu-wrapper") {
//         x.className = "menu-wrapper responsive";
//     } else {
//         x.className = "menu-wrapper";
//     }
// }