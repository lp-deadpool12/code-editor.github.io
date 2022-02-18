// Поле для написания кода
let myCodeMirror = CodeMirror(document.getElementById('myTextarea'));

let editor = CodeMirror.fromTextArea(myTextarea, {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'ayu-dark',
});

// создание вкладки на кнопку
let createTab = document.createElement('div');
createTab.innerHTML = "<p>untitled</p> <div>&#10005<div>";
let openTab = document.getElementById('CreateNewTab');
let tabs = document.getElementById('tabs');
let tab = document.getElementById('tab');

openTab.addEventListener('click', () => {
    createTab.classList.add('tab');
    tabs.insertAdjacentHTML('afterbegin', '<div class="tab"><p>untitled</p> <div class="close_tab">&#10005<div></div>');

});


// меню настроек
let menuBtn = document.getElementById("settingsMenuBtn");
let settingsMenu = document.getElementById('settingsMenu');
let closeMenu = document.getElementById('close_menu')

menuBtn.addEventListener('click', () => {
    settingsMenu.classList.add('settingsMenuActive');
});

closeMenu.addEventListener('click', () => {
    settingsMenu.classList.remove('settingsMenuActive');
});

let hidePageHeader = document.getElementById("header")

let flag = true;
let hideHeaderBtn = document.getElementById("hide_show_header")

function hideHeader() {
    if (flag) {
        hidePageHeader.style.display = "none";
        menuBtn.style.top = "16px";
        hideHeaderBtn.classList.remove("item6")
        hideHeaderBtn.classList.add("item6_hide")
        hideHeaderBtn.innerText = "Show header"
            //hideHeaderBtn.style.background = 'url("/img/menu-icons/show.svg")'
        flag = false;
    } else {
        hidePageHeader.style.display = "block";
        menuBtn.style.top = "23px";
        hideHeaderBtn.classList.add("item6")
        hideHeaderBtn.classList.remove("item6_hide")
        hideHeaderBtn.innerText = "Hide header"
        flag = true;
    }

}
// Создаем 3 константы в которых по id получаем 3 элемента из html
const openPopUp = document.getElementById('feedbackPopUpOpen');
const popUp = document.getElementById('wrapper')
const popUpClose = document.getElementById('closePopUp')

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
})