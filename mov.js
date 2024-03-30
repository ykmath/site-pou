var pou = document.querySelector("#pou")
var rect = pou.getBoundingClientRect();

function move() {
    currLeft = parseInt(pou.style.left || 0);
    pou.style.left = (currLeft + 10) + "px";
}

window.addEventListener("keydown", (key) => {
    if (key.key == "d") {
        console.log("d")
        move()
    }
})
