var modal = document.getElementById('modal')
var modalImg = document.getElementById("activeImg")
var captionText = document.getElementById("caption");
$(document).click(function (event) {
    var img
    if (img = document.getElementById($(event.target)[0].id)) {
        if (img.alt) {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        }
    }
})

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}