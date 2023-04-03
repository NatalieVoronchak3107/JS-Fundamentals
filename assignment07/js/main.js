/* 1. 
За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно. */

let browserWindow = window.open(" ", " ", "width=300, height=300");

setTimeout(() => {
  browserWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  browserWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  browserWindow.close();
}, 6000);

/* 2. 
Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
 <div>
        <button . . . . . >Change style!</button>
</div>    
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, 
шрифт сімейства "Comic Sans MS". */

function changeCSS() {
  let textEl = document.getElementById("text");

  textEl.style.color = "orange";
  textEl.style.fontSize = "20px";
  textEl.style.fontFamily = "Comic Sans MS, sans-serif";
}

/* 3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png */

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const link = document.getElementById("link");

btn1.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

btn2.addEventListener("dblclick", () => {
  document.body.style.backgroundColor = "pink";
});

btn3.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});

btn3.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

link.addEventListener("mouseenter", () => {
  document.body.style.backgroundColor = "yellow";
});

link.addEventListener("mouseleave", () => {
  document.body.style.backgroundColor = "white";
});

/* 4. 
Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png */

const deleteBtn = document.getElementById("deleteBtn");
const selectList = document.getElementById("selectList");

deleteBtn.addEventListener("click", function () {
  const selectedIndex = selectList.selectedIndex;
  if (selectedIndex >= 0) {
    selectList.remove(selectedIndex);
  }
});

/* 5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png */

const clickMeBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickMeBtn.addEventListener("click", () => {
  message.innerHTML = "I was pressed!";
});

clickMeBtn.addEventListener("mouseover", () => {
  message.innerHTML = "Mouse on me!";
});

clickMeBtn.addEventListener("mouseout", () => {
  message.innerHTML = "Mouse is not on me!";
});

/* 6. 
Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png */

/* 7. 
 На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
<select name="country" id="country">
        <option value="ger">Germany</option>
        <option value="usa">USA</option>
        <option value="ukr">Ukraine</option>
        </select>
                            
<select name="cities" id="cities"></select>
<p></p>
        
https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png */
