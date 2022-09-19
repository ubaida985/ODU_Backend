const rightDiv = document.getElementById("rightDiv");
const home = document.getElementById("home");
const visual = document.getElementById("visual");
const dataset = document.getElementById("dataset");
const relation = document.getElementById("relation");
const trial = document.getElementById("trial");
const team = document.getElementById("team");
const footer = document.getElementById("footer");
const mainMenu = document.getElementById("mainMenu");
let menuOpen = false;
rightDiv.addEventListener('click', () => {
    if (!menuOpen) {
        rightDiv.classList.add("open");
        mainMenu.classList.add("menuOpen");
        menuOpen = true;
    } else {
        rightDiv.classList.remove("open");
        mainMenu.classList.remove("menuOpen");
        menuOpen = false;
    }
});
home.addEventListener('click', () => {
    menuHandler();
});
visual.addEventListener('click', () => {
    menuHandler();
});
dataset.addEventListener('click', () => {
    menuHandler();
});
relation.addEventListener('click', () => {
    menuHandler();
});
trial.addEventListener('click', () => {
    menuHandler();
});
team.addEventListener('click', () => {
    menuHandler();
});
footer.addEventListener('click', () => {
    menuHandler();
});
const menuHandler = () => {
    if (!menuOpen) {
        rightDiv.classList.add("open");
        mainMenu.classList.add("menuOpen");
        menuOpen = true;
    } else {
        rightDiv.classList.remove("open");
        mainMenu.classList.remove("menuOpen");
        menuOpen = false;
    }
}