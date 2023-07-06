/*alert
С этой функцией мы уже знакомы. Она показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».

Например:

alert("Hello");

result = prompt(title, [default]);

let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

result = confirm(question);

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK

let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK

Итого
Мы рассмотрели 3 функции браузера для взаимодействия с пользователем:

alert
показывает сообщение.
prompt
показывает сообщение и запрашивает ввод текста от пользователя. Возвращает напечатанный в поле ввода текст или null, если была нажата кнопка «Отмена» или Esc с клавиатуры.
confirm
показывает сообщение и ждёт, пока пользователь нажмёт OK или Отмена. Возвращает true, если нажата OK, и false, если нажата кнопка «Отмена» или Esc с клавиатуры.
Все эти методы являются модальными: останавливают выполнение скриптов и не позволяют пользователю взаимодействовать с остальной частью страницы до тех пор, пока окно не будет закрыто.

На все указанные методы распространяются два ограничения:

Расположение окон определяется браузером. Обычно окна находятся в центре.
Визуальное отображение окон зависит от браузера, и мы не можем изменить их вид.
Такова цена простоты. Есть другие способы показать более приятные глазу окна с богатой функциональностью для взаимодействия с пользователем, но если «навороты» не имеют значения, то данные методы работают отлично.

<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("Ваше имя?", "");
    alert(name);
  </script>

</body>
</html>

 */
