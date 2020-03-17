// 1. HTMLElement.blur() и 2. HTMLElement.focus()

/* Метод HTMLElement.blur () удаляет фокус клавиатуры с текущего элемента. 
Метод HTMLElement.focus () устанавливает фокус на указанный элемент, если он может быть сфокусирован. 
Сфокусированный элемент - это элемент, который будет получать клавиатуру и подобные события по умолчанию.
Пример:
<input type="text" id="myText" value="Sample Text">
<br><br>
<button type="button" onclick="focusInput()">Click me to gain focus</button>
<button type="button" onclick="blurInput()">Click me to lose focus</button>

function focusInput() {
    document.getElementById('myText').focus();
}
function blurInput() {
    document.getElementById('myText').blur();
}
При нажатии на кнопку Click me to gain focus произойдёт фокус на input для ввода информации, а
при нажатии на кнопку Click me to lose focus произойдёт отмена фокуса на input
*/

// 3. HTMLElement.click()

/* Метод HTMLElement.click() имитирует клик мышкой по элементу. 
Пример:
Пример:
<h1 id='myText'>Hello World</h1>
<br><br>
<button type="button" onclick="redCOlor()">Click me change color</button>

function redColor() {
    var text = document.getElementById('myText');
    text.style.color = 'red';
}
При клике мышки окрасит слова Hello World в красный цвет
*/

// 4. HTMLElement.forceSpellCheck()

/* Метод forceSpellCheck () интерфейса HTMLElement вызывает проверку орфографии и грамматики для элементов HTML, 
даже если пользователь не фокусировался на элементах. Этот метод переопределяет поведение агента пользователя. 
Конкретный пользовательский интерфейс проверки, например, появляется ли красное подчеркивание, определяется пользовательским агентом.
Пример:
var hello = document.getElementById('#hello');
hello.forceSpellCheck();
*/