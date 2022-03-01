// Создаем 3 константы в которых по id получаем 3 элемента из html
const openPopUp = document.getElementById('open_pop_up');
const popUp = document.getElementById('wrapper')
const popUpClose = document.getElementById('closePopUp')

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

popUpClose.addEventListener('click', () => {
    popUp.classList.remove('active');
})