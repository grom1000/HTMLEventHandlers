// 1. HTMLElement.oncopy и 2. HTMLElement.onpaste

/* Свойства oncopy и onpaste интерфейса HTMLElement являются EventHandler, которые обрабатывает события копирования и вставки.
Событие копирования срабатывает, когда пользователь пытается скопировать текст.
Событие вставки срабатывает, когда пользователь пытается вставить текст.

Пример:

<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">Try copying and pasting text into this field!</textarea>

<h3>Log:</h3>
<p id="log"></p>

const log = document.getElementById('log');

function logCopy(event) {
    log.innerText = 'Copy blocked!\n' + log.innerText;
    event.preventDefault();
}

function logPaste(event) {
    log.innerText = 'Paste blocked!\n' + log.innerText;
    event.preventDefault();
}

const editor = document.getElementById('editor');

editor.oncopy = logCopy;
editor.onpaste = logPaste;

В данном примере при вставке текста в <textarea></textarea> будет выведено сообщение Paste blocked!, а при копировании - сообщение
Copy blocked!
*/
