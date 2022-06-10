'use strict';

function getDecimal(num) {//возвращаем дробную часть от введённого числа
    let a = num.toString();//преобразуем в строкове значение
    a = a.slice(a.indexOf("."));
    
    let str = 0 + a;
    if (Number(num) < 0) {//
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
    }
    return str;
}
function ucFirst(str) {//переводим первый символ в вверхний регистр
    return (str[0].toUpperCase() + str.slice(1));//возвращаем значение строки преобразованное в верхний регистр
}

function checkSpam(str) {
    str = str.toLowerCase();
    if ((str.includes('xxx')) || (str.includes('viagra')))//если строка совпадает то даём тру
        return true;
    else return false;// не совпадает фалсе
}

function truncate(str, maxlength) {//проверяем длиину строки
    if (maxlength == 0) str = (''); else
    if (str.length > maxlength)
        str = str.slice(0, maxlength-1) + '\u{2026}'; 
    return str;
}
