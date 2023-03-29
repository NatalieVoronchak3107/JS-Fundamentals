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
  modal.document.write(
    `<p>${first}, ${last}, ${second}, ${fourth}, ${third}</p>`
  );
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
  header: document.querySelector("h1"),
  paragraphs: document.querySelectorAll("p"),
  myList: document.querySelector("#myList"),
  span: document.querySelector("span"),
};

elements.header.style.backgroundColor = "#90EE90";
elements.paragraphs[0].style.fontWeight = "bold";
elements.paragraphs[1].style.color = "red";
elements.paragraphs[2].style.textDecoration = "underline";
elements.paragraphs[3].style.fontStyle = "italic";
elements.myList.style.cssText = "display: flex; list-style: none;";
elements.span.style.display = "none";

/* 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */

// тут не створювала додатково body
const main = document.createElement("main");
main.setAttribute("class", "mainClass check item");
const div = document.createElement("div");
div.setAttribute("id", "myDiv");
const p = document.createElement("p");
p.textContent = "First paragraph";

div.appendChild(p);
main.appendChild(div);
document.body.appendChild(main);

/* 4. Задача описана в блоці JS https://codepen.io/misha_klymenko/pen/Jjabvez 
реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock*/

const button = document.querySelector(".btn");
const outBlock = document.querySelector(".out");

button.addEventListener("click", () => {
  const fullName = document.querySelector('input[name="fio"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const dateOfBirthday = document.querySelector('input[name="birthday"]').value;
  const email = document.querySelector('input[name="email"]').value;

  const values = [fullName, phone, dateOfBirthday, email];
  outBlock.innerHTML = values.join(", ");
});

/* 5. Задача описана в блоці JS https://codepen.io/misha_klymenko/pen/abzLvqo

1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const dataAnimValue = circle.getAttribute("data-anim");
  circle.classList.add(dataAnimValue);
  console.log(circle.classList.contains(circle.getAttribute("data-anim")));
});

/* 6. Задача описана в блоці JS https://codepen.io/misha_klymenko/pen/dyjyeGO 

- Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
- Придумати ще 2 варіації, від яких буде залежати ціна товару.*/

// знаходимо всі елементи, на які можна клікнути
/*const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const technologies = document.querySelectorAll('.technology');

// знаходимо елемент ціни, щоб оновити його відповідно до вибору користувача
const price = document.getElementById('outprice');

// функція, яка буде виконуватись при кліку на елемент
function handleClick() {
  // видаляємо клас active з усіх елементів, щоб позначити активний елемент
  this.parentNode.querySelectorAll('.active').forEach(function(el) {
    el.classList.remove('active');
  });

  // додаємо клас active до обраного елементу
  this.classList.add('active');

  // оновлюємо ціну відповідно до вибору користувача
  const selectedColor = document.querySelector('.color.active');
  const selectedSize = document.querySelector('.size.active');
  const selectedTechnology = document.querySelector('.technology.active');

  const colorPrice = parseInt(selectedColor.getAttribute('data-price'));
  const sizePrice = parseInt(selectedSize.getAttribute('data-price'));
  const technologyPrice = parseInt(selectedTechnology.getAttribute('data-price'));

  const totalPrice = colorPrice + sizePrice + technologyPrice;

  price.innerText = totalPrice.toFixed(2);
}

// додаємо обробник події click для кожного елемента
colors.forEach(function(color) {
  color.addEventListener('click', handleClick);
});

sizes.forEach(function(size) {
  size.addEventListener('click', handleClick);
});

technologies.forEach(function(technology) {
  technology.addEventListener('click', handleClick);
}); 
*/
/*// отримуємо необхідні елементи з DOM
const colors = document.querySelectorAll('.color');
const sizes = document.querySelectorAll('.size');
const technologies = document.querySelectorAll('.technology');
const outprice = document.querySelector('#outprice');

// встановлюємо початкову ціну товару
let price = 189.99;

// додаємо обробник події при кліку на кожен елемент
colors.forEach(color => {
  color.addEventListener('click', () => {
    // отримуємо ціну вибраного кольору
    const colorPrice = parseInt(color.getAttribute('data-price'));
    // оновлюємо ціну товару
    price = colorPrice;
    // додаємо клас active до вибраного елементу та видаляємо його з інших
    colors.forEach(c => c.classList.remove('active'));
    color.classList.add('active');
    // оновлюємо відображення ціни товару
    outprice.innerHTML = price.toFixed(2);
  });
});

sizes.forEach(size => {
  size.addEventListener('click', () => {
    const sizePrice = parseInt(size.getAttribute('data-price'));
    price += sizePrice;
    sizes.forEach(s => s.classList.remove('active'));
    size.classList.add('active');
    outprice.innerHTML = price.toFixed(2);
  });
});

technologies.forEach(technology => {
  technology.addEventListener('click', () => {
    const technologyPrice = parseInt(technology.getAttribute('data-price'));
    price += technologyPrice;
    technologies.forEach(t => t.classList.remove('active'));
    technology.classList.add('active');
    outprice.innerHTML = price.toFixed(2);
  });
}); */

// отримуємо необхідні елементи з DOM
const colorBtnContainer = document.querySelector(".colors");
const sizeBtnContainer = document.querySelector(".sizes");
const technologyBtnContainer = document.querySelector(".technologies");
const price = document.getElementById("outprice");
let activeColor = document.querySelector(".colors .active");
let activeSize = document.querySelector(".sizes.active");
let activeTechnology = document.querySelector(".technologies.active");

colorBtnContainer.addEventListener("click", (event) => {changeColor(event); changeImageColor();});
sizeBtnContainer.addEventListener("click", (event) => changeSize(event));
technologyBtnContainer.addEventListener("click", (event) => changeTechnology(event));


const changeColor = (event) => {
  if (event.target.classList.contains("color")) {
    activeColor.classList.remove("active");
    event.target.classList.add("active");
    activeColor = event.target;
    const newPrice = event.target.getAttribute("data-price");
    price.innerText = newPrice;
  }
}

const changeImageColor = () => {
  const images = document.querySelectorAll(".shoe");
  images.forEach((shoe) => {
    const colorMatch = shoe.getAttribute("color") === activeColor.getAttribute("color");
    shoe.classList.toggle("show", colorMatch);
  });
}

const changeSize = (event) => {
  if (event.target.classList.contains("size")) {
    const activeSizeBtn = document.querySelector(".sizes .active");
    if (activeSizeBtn) {
      activeSizeBtn.classList.remove("active");
    }
    event.target.classList.add("active");
    activeSize = event.target.getAttribute("data-price");
    updatePrice();
  } 
}
const changeTechnology = (event) =>{
  if (event.target.classList.contains("technology")) {
    const activeTechnologyBtn = document.querySelector(".technologies .active");
    if (activeTechnologyBtn) {
      activeTechnologyBtn.classList.remove("active");
    }
    event.target.classList.add("active");
    activeTechnology = event.target.getAttribute("data-price");
    updatePrice();
  } 
}

const updatePrice = () => {
  const colorPrice = parseInt(activeColor.getAttribute("data-price"));
  const sizePrice = activeSize ? parseInt(activeSize) : 0;
  const techPrice = activeTechnology ? parseInt(activeTechnology) : 0;
  price.innerText = colorPrice + sizePrice + techPrice;
}