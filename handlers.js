// 1. HTMLElement.oncopy, 2. HTMLElement.onpaste и 3. HTMLElement.oncut

/* Свойства oncopy, onpaste и oncut интерфейса HTMLElement являются EventHandler, которые обрабатывает события копирования и вставки.
Событие копирования срабатывает, когда пользователь пытается скопировать текст в определённую зону тэга.
Событие вставки срабатывает, когда пользователь пытается вставить текст в определённую зону тэга.
Событие вырезание срабатывает когда пользователь пытается вырезать текст из определённой зоны тэга.

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

function logCut(event) {
    log.innerText = 'Cut blocked!\n' + log.innerText;
    event.preventDefault();
}

const editor = document.getElementById('editor');

editor.oncopy = logCopy;
editor.onpaste = logPaste;
editor.oncut = logCut

В данном примере при вставке текста в <textarea></textarea> будет выведено сообщение Paste blocked!, при копировании - сообщение
Copy blocked!, а при вырезании - сообщение Cut blocked!
*/

// 4. TouchEventHandlers.ontouchstart, 5. TouchEventHandlers.ontouchend, 6. TouchEventHandlers.ontouchmove, 7. TouchEventHandlers.ontouchenter,
// 8. TouchEventHandlers.ontouchleave и 9. TouchEventHandlers.ontouchcancel - для стилусов и пальцев.
