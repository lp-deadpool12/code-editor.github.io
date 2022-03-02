// ДОСТУП К GITHUB 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

let getAllTextArea = document.getElementsByClassName("content_code-editor-area") // Получаем все эл-ы с классом content_code-editor-area
let myTextarea = document.querySelector(".content_code-editor-area") // Получаем 1-ый эл с классом content_code-editor-area

// Функция добаваления экземпляра объекта к новой TextArea которая создается при создании вкладки
function createNewCodeArea() { // Объявляем функцию 
    let lastCodeArea = getAllTextArea[getAllTextArea.length - 1] // Получам поелдний эл из коллекции getAllTextArea
    let newEditor = CodeMirror.fromTextArea(lastCodeArea, { // Инициализируем поледний эл как объект 
        lineNumbers: true, // Добавляем нумерацию строк
        theme: "ayu-dark", // Тема редактораayu-dark
    });
}

// Даннный код нужен что-бы инициализировать первую textarea 
let editor = CodeMirror.fromTextArea(myTextarea, { // Инициализируем эл как объект 
    lineNumbers: true, // Добавляем нумерацию строк
    theme: "ayu-dark" // Тема редактораayu-dark
});


let openPopUp = document.getElementById("settingsMenuBtn") // получаем кнопку для открытия меню настроек////
let popUpBody = document.getElementById("settingsMenu") // получем само окно настроек

openPopUp.addEventListener("click", () => { // обрабатываем клик по кнопке открытия настроек
    popUpBody.classList.add("settingsMenuActive") // добовляем класс settingsMenuActive для меню настроек
    popUpBody.addEventListener("click", (clicedEl) => { // обрабатываем все клики внутри меню настроек
        if (clicedEl.target.hasAttribute("data-menu-close")) { // Проверка на наличие у кликнутого элемента атрибута data-menu-close
            popUpBody.classList.remove("settingsMenuActive") // удаляем класс settingsMenuActive для меню настроек
        }
    })
})

// Задаем нужные при работе переменные
const createTab = document.getElementById("create-tab"); // Получаем кнопку которая при клике на нее должна создавать новую вкладку
const tabs = document.getElementById("tabs__body"); // Плучаем контейнер в который будут добовлятся вкладки 
let tabsContentBody = document.querySelector(".tabs-content") // Плучаем контейнер в который будет добовлятся контент
let createEl; // Создать вкладку
let tabСounter = 1; // Счетчик вкладок
let tabContСounter = 1; // Счетчик контенка вкладок
let tabContent; // Создать контент вкладки
let currentTab;
let currentTabContent;

// Функция для создания новой вкладки
function createTabs() { // Обявляем функцию
    createEl = document.createElement('div'); // Создаем новый div новый контейнер для вкладки
    createEl.className = 'tab'; // Добавляем новому диву калсс tab
    createEl.setAttribute("data-tab", "#" + tabСounter) // Добавляем новой вкладке атрибут data-tab со значеним счетчика вкладок
    createEl.innerHTML = `<p>unnamed</p><div data-close-tab="close-tab" class="close-tab">✕</div>`; // Добавляем внутрь вкладки содержимое с номером счетчика
    tabs.append(createEl) // Добовляем новую вкладку в общий контейнер всех табов
    tabСounter++; // Увеличиваем счетчик на 1

}

// Функция для создания контента новой вкладки
function createTabsContent() { // Обявляем функцию
    tabContent = document.createElement("div") // Создаем новый div новый контейнер для контента вкладки
    tabContent.classList.add('content') // Добавляем новому диву калсс content
    tabContent.setAttribute("data-tab-content", "#" + tabContСounter) // Добавляем контенту новой вкладки атрибут data-tab-content со значеним счетчика контента вкладок
    tabContent.innerHTML = `<textarea class="content_code-editor-area" name="" id=""></textarea>` // Добавляем внутрь контента вкладки содержимое с номером счетчика
    tabsContentBody.append(tabContent) // Добовляем новый контент вкладки в общий контейнер контента табов
    tabContСounter++ // Увеличиваем счетчик на 1
}

//Функция для переключению на новую вкладку
function getLastEl() { // Обявляем функцию
    let getAllTabsContent = document.getElementsByClassName("content") // Получаем живую коллекцию из всех эл-ов с классом content
    let getLastTabCont = getAllTabsContent[getAllTabsContent.length - 1] // Получем последний элемент коллекции

    let getAllTabs = document.getElementsByClassName("tab") // Получаем живую коллекцию из всех эл-ов с классом tab
    let getLastTab = getAllTabs[getAllTabs.length - 1] // Получем последний элемент коллекции

    for (let index = 0; index < getAllTabs.length; index++) { // Перебираем коллекцию  табов 
        const element = getAllTabs[index]; // Назначаем element getAllTabs[index] = (следующий таб при каждой новой итерации)
        element.classList.remove("active") // Удаляем у element(следующий таб при каждой новой итерации) класс active 

    }
    for (let index = 0; index < getAllTabsContent.length; index++) { // Перебираем коллекцию табов с контентом табов 
        const element = getAllTabsContent[index]; // Назначаем element getAllTabsContent[index] = (следующий контент таба при каждой новой итерации)
        element.classList.remove("tab-content-active") // Удаляем у element(следующий таб при каждой новой итерации) класс tab-content-active 

    }

    getLastTab.classList.add("active") // Добавляем последнму элементу коллекции класс active
    getLastTabCont.classList.add("tab-content-active") // Добавляем последнму элементу коллекции класс "tab-content-active
}

// Функция для скрола контейнера табов до кноца
function scrollTabsEnd() { // Объявляем функцию
    tabs.scrollTo(tabs.scrollWidth, 0) // Скролим контейнер табов до конца. 1 параметр скрол по х он равен шиирне самого контейнер, 2 параметр скрол по у равен 0
}

function delCurrentTab() {
    console.log(currentTab);
    console.log(currentTabContent);
}

// Функия вызова функций createTabs() и createTabsContent() 
createTab.addEventListener('click', () => { // Обрабатываем клик по кнопке создания вкладок
    createTabs(); // Вызываем функцию создания вкладок
    createTabsContent(); // Вызываем функцию создания контента вкладок
    getLastEl() // Вызываем функцию переключения на последний таб 
    createNewCodeArea() // Вызываем функцию инита всех новых textarea 
    scrollTabsEnd() // Вызываем функцию для скрола контейнера табов до кноца
})

// Создание таба на клавишу
document.addEventListener("keydown", (event) => { // // Обрабатываем нажатие калвиши т создания вкладок
    if (event.code == "Home") { // если код калвиши KeyN
        createTabs(); // Вызываем функцию создания вкладок
        createTabsContent(); // Вызываем функцию создания контента вкладок
        getLastEl() // Вызываем функцию переключения на последний таб 
        createNewCodeArea() // // Вызываем функцию инита всех новых textare
        scrollTabsEnd() // Вызываем функцию для скрола контейнера табов до кноца
    } else if (event.code == "Delete") {
        delCurrentTab()
    }
})

tabs.addEventListener("click", (event) => { // добавляем обработчик клика по всей области полученного контейнера табов

    let clickedElem = event.target // Записывам в отдельную пеерменную клинутый элемент
    let getTabsContent = document.querySelectorAll(".content") // Получаем живую коллекцию из всех эл-ов с классом content
    let getTabs = document.querySelectorAll(".tab") // Получаем живую коллекцию из всех эл-ов с классом tab


    if (clickedElem.hasAttribute("data-close-tab")) { // Проверям наличие атрибута data-close-tab у кликнутого элемента 
        // если условевие верно (возврашает True) то выполняем следующие команды
        getTabsContent.forEach(elem => { // Перебираем коллекцию с полученным контентом вкладок где elem следующая вкладка при новой итерации
            if (elem.getAttribute("data-tab-content") == clickedElem.parentNode.getAttribute("data-tab")) { // проверяем совподает у вкладки атрибут data-tab-content с атрибутом data-tab кликнутого элемента 
                elem.remove() // если есть удаяляем ээлкмкет (вкладку) у коготорого найден этот атрибут 
            }
        })
        clickedElem.parentNode.remove() // Удаляем родительский элемент у кликнутого элемента (так как сам элемент вложен он тоже удалиться с остальными дочерними)
        getLastEl() // Вызываем функцию переключения на последний таб 

    } else if (clickedElem.getAttribute("data-tab")) { // выполняется если у клинутого элемента есть атрибут data-tab

        let getAttr = clickedElem.getAttribute("data-tab") // записываем в переменную значение атрибута data-tab у кликнутого элемеента
        currentTab = clickedElem;

        getTabs.forEach(tab => { // Перебираем коллекцию вкладок
            tab.classList.remove("active") // Убираем у каждой вкладки класс active
        });

        clickedElem.classList.add("active") // добовляем для кликнутого элмента класс active

        getTabsContent.forEach(tabCont => { // Перебираем коллекцию с полученным контентом вкладок где tabCont следующая вкладка при новой итерации

            tabCont.classList.remove("tab-content-active") // Убираем у контента каждой вкладки класс tab-content-active

            if (getAttr == tabCont.getAttribute("data-tab-content")) { //Выполнится если значение атрибта из переменой getAttr = значению атрибута data-tab-content tabCont
                tabCont.classList.add("tab-content-active") // Добавляем tabCont класс tab-content-active
                currentTabContent = tabCont
            }
        });
    }
})