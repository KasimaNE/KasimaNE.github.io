'use strict';
/**
 * pow возводит в степень
 * @param {кладём x} x 
 * @param {кладём n} n 
 * @returns выводим x в степни n
 */
function pow(x, n) { //возводим в степень
    return x ** n;
}
/**
 * вычисляет сумму от 1 до n
 * @param {вводимое число с клавиатуры} n 
 * @returns вывод суммы от 1 до n
 */
function sumTo(n) {//вычисляем сумму от 1 до n
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

/**
 * возвращает факториал
 * @param {факториал от n} n 
 * @returns 
 */
function factorial(n) {// возвращение факториала введённого числа
    let md = 1;
    let i = 1;
    while (i <= n) {
        md *= i
        i++;
    }
    return md;
}

/**
 * число фибаначи
 * @param {вводимое число с клавиатуры} n 
 * @returns вывод после цикла числа фибаначи
 */
function fib(n) {// получение числа фибаначи
    let a = 1n;
    let b = 1n;
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
/**
 * сравнивает числа
 * @param {сравнивает 2 числа} x 
 * @returns выводит trye если x меньше y, false если наоборт, null если они равны
 */
function compare(x) {// принимаем цедочисленное значение
    let res = function() {
        let y = prompt('Введите y');//вводим значение
        if (x < y) return true
        else if (x > y) return false
        else if (x = y) return null;
    }
return res();

}
