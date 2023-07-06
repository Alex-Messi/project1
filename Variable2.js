/*
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity

alert( "не число" / 2 ); // NaN, такое деление является ошибкой

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "не число" / 2 - 1 ); // NaN

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

et name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3

let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено

let isGreater = 4 > 1;

alert( isGreater ); // true (результатом сравнения будет "да")

let age = null;

et age;

alert(age); // выведет "undefined"

let age = 123;

// изменяем значение на undefined
age = undefined;

alert(age); // "undefined"

// Обычный синтаксис
typeof 5 // Выведет "number"
// Синтаксис, напоминающий вызов функции (встречается реже)
typeof(5) // Также выведет "number

typeof 50 + " Квартир"; // Выведет "number Квартир"
typeof (50 + " Квартир"); // Выведет "string"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

let name = "Ilya";

// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name}` ); // hello Ilya

Итого
В JavaScript есть 8 основных типов данных.

Семь из них называют «примитивными» типами данных:
number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
bigint для целых чисел произвольной длины.
string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
boolean для true/false.
null для неизвестных значений – отдельный тип, имеющий одно значение null.
undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
symbol для уникальных идентификаторов.
И один не является «примитивным» и стоит особняком:
object для более сложных структур данных.









*/