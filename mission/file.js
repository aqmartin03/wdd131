let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#3d3c3c";
        document.getElementById("content").style.color = "white";
        logo.src = "byui-logo-white.png";
        document.getElementById("h2").style.color = "royalblue";
    } else {
        document.body.style.backgroundColor = "white";
        document.getElementById("content").style.color = "black";
        logo.src = "byui-logo-blue.webp";
        document.getElementById("h2").style.color = rgb(0, 106, 255);
    }
}