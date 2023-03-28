
// custom cursor
const cursor_dot = document.querySelector(".cursor_dot");
const cursor_outline = document.querySelector(".cursor_outline");
window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor_dot.style.left = `${posX}px`;
    cursor_dot.style.top = `${posY}px`;

    cursor_outline.style.left = `${posX}px`;
    cursor_outline.style.top = `${posY}px`;

    cursor_outline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 600, fill: "backwards" });

});

window.addEventListener("mouseout", () => {
    cursor_dot.style.display = "none";
    cursor_outline.style.display = "none";
});
window.addEventListener("mouseover", () => {
    cursor_dot.style.display = "block";
    cursor_outline.style.display = "block";
});

// window.addEventListener("click", (){
//     // cursor_dot.classList.toggle("width") = "10px"
//     cursor_outline.style.width = "80px"
//     cursor_outline.style.height = "80px"
// })


// dark mode
let icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./images/sun.png";
    }
    else {
        icon.src = "./images/moon.png";
    }
}


// multiple text typing
const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Frontend Developer"
    }, 0);
    setTimeout(() => {
        text.textContent = "Fast Learner"
    }, 4000);
}

textLoad()
setInterval(textLoad, 8000);