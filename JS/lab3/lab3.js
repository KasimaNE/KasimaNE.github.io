'use strict';

function getDecimal(num) {//возвращаем дробную часть от введённого числа
    let a = num.toString();//преобразуем в строкове значение
    a = a.slice(a.indexOf("."));
    
    let str = 0 + a;
    if (Number(num) < 0) {//
        str = 1 - Number(str);
        str = str.toFixed(a.length - 1);
        let dd = str.toNumber();
    }
    return dd;
}
/**
 * переводит первый символ строки в верхний регистр
 * @param {string} str строка
 * @returns строка с первым символом в верхнем регистре
 */

 function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase()+str.slice(1);
 }

/*
function ucFirst(str) {
    return (str[0].toUpperCase() + str.slice(1));
}
*/

function checkSpam(str) {
    str = str.toLowerCase();
    return (str.includes('xxx')) || (str.includes('viagra'))
}

function truncate(str, maxlength) {//проверяем длиину строки
    if (maxlength == 0) str = (''); else
    if (str.length > maxlength)
        str = str.slice(0, maxlength-1) + '\u{2026}'; 
    return str;
}
