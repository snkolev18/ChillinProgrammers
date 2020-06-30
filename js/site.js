$(document).ready(function () { // run when the whole site is loaded

    translateLabel("en");

    $(".translate-button").on("click", function () {
        console.log("keks");
        translateLabel($(this).data("lng"));
    });
});