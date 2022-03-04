var imgSlider = document.querySelector("#imgSlider")

var imgPosition = 0;
function goRight() {
    if (imgPosition < 8) {
    imgPosition++;
    }
    var imgPositionPx = imgPosition * 650;

    imgSlider.style.transform = "translateX(-" + imgPositionPx + "px)";

}

function goLeft() {
    if (imgPosition > 0) {
        imgPosition--;
    }

    var imgPositionPx = imgPosition * 650;

    imgSlider.style.transform = "translateX(-" + imgPositionPx + "px)";
}