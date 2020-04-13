'use strict';

// string ('Sasha')
// number (0, 1, 3.14) +-2 в теспени 53
// boolean (true, false)
// undefined (undefined)
// object ({}, [])
// symbol
// bigInt (232323232n)
// null (null)

// typeof (проверка типов данных)
// typeof null = 'object'

// var (оператор обьявления переменной) НЕ РЕКОММЕНДУЕТСЯ К ИСПОЛЬЗОАВНИЮ, УСТАРЕЛО
// let (оператор обьявления переменной, которую можно переопредилить)
// const (оператор обьявления константы)

// const 1name = 'name'; // ИМЯ ПЕРЕМЕННОЙ НЕ МОЖЕТ НАЧИАНТЬСЯ С ЦИФРЫ
// camelCase, начало не с цифр, можно использовать символы $ и _
const name = 'Sasha';
const _name = 'Alex';
const $name = 'Sashko';

let age = 26;
age = 27;

// let birth = 1990, city = 'Kremenchuk'; // не правильно

let birth = 1991; // правильно
let city = 'Kremenchuk'; // правильно

const ageResult = 2020 - 1993;

function showName() {
  alert(name);
}

const getAge = function (year) {
  return 2020 - year;
};

showName();
alert(getAge(1993));

if (false) {
  // Если (true/false)
} else {
  // иначе
}

// обьявляем переменную, в которую записываем функцию
const checkEvenNumber = function () {
  // выводим на экран браузера окно 'prompt', в поле которго вводим данные, которые в последствии записываем в переменную 'num'
  const num = prompt('Enter your number');
  // Условие: Если 'num' не является числом
  if (isNaN(num) || num === '') {
    // записать в тег body следующее
    document.write(`${num} is not a number`);
    // Иначе если num строго равен 0
  } else if (num === 0) {
    // записать в тег body следующее
    document.write('It is 0');
    // Если num при делении на 2 оставляет остаток
  } else if (num % 2) {
    // записать в тег body следующее
    document.write(`${num} is not even`);
    // Если нечего из выше перечисленного не ПРАВДА, тогда
  } else {
    // записать в тег body следующее
    document.write(`${num} is even`);
  }
};

// || или
// && И
// !! (Логичесский ператор перевода значения в Boolean (true или false))
// ! (Логичесский оператор (НЕ) перевода значения в Boolean (true или false), только наоборот)
// ?? (Nullish Coalescing) Нулевое слияние null или undefined (улучшенная версия оператора ИЛИ (||)) 0 || 1 = 1; 0 ?? 1 = 0

// +-/* (плюс минус деление умножение)
// > < >= <= (Больше, меньше, больше равно, меньше равно)
// % (деление на что то, но возвразает остаток) напрмер 5 % 2 = 1
// == (два знака равно) не строгое равенство (true == false = false; true == 1 = true)
// === (три знака равно) строгое равенство (true === false = false; true === 1 = false)
// != (! =) не строгое не равенство
// !== (! = =) строгое не равенство


checkEvenNumber();
