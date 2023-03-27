/* 1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3 */

function openModal() {

  const list = document.getElementById("list");

  const first = list.children[0].textContent;
  const last = list.children[list.children.length - 1].textContent;
  const second = list.children[1].textContent;
  const fourth = list.children[3].textContent;
  const third = list.children[2].textContent;

  const modal = window.open("", "modal");
  modal.document.write(`<p>${first}, ${last}, ${second}, ${fourth}, ${third}</p>`);
}

/* 2. Для сторінки
<body>
  <h1>I'am a big header!!!</h1>
  <div id="myDiv">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
    <p>Fourth paragraph</p>
  </div>
  <ul id="myList">
    <li>Make</li>
    <li>me</li>
    <li>horizontal!</li>
  </ul>
  <span>Make me invisible, please!</span>
</body>

Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці. */

const elements = {
  header: document.querySelector('h1'),
  paragraphs: document.querySelectorAll('p'),
  myList: document.querySelector('#myList'),
  span: document.querySelector('span')
};

elements.header.style.backgroundColor = '#90EE90'; 
elements.paragraphs[0].style.fontWeight = 'bold';
elements.paragraphs[1].style.color = 'red';
elements.paragraphs[2].style.textDecoration = 'underline';
elements.paragraphs[3].style.fontStyle = 'italic';
elements.myList.style.cssText = 'display: flex; list-style: none;';
elements.span.style.display = 'none';

/* 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

/* 4. Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/Jjabvez */

/* 5. Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/abzLvqo */

/* 6. Задача описана в блоці JS
https://codepen.io/misha_klymenko/pen/dyjyeGO */

/*⭐⭐⭐
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Зробити електронний годинник у такому стилі. 
https://user-images.githubusercontent.com/9075641/182206079-7c4aa5f0-50d9-4808-bec7-6d3af7bdada9.gif */
