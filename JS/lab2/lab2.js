'use strict';
/**
 * pow возводит в степень
 * @param {number} x 
 * @param {number} n 
 * @returns выводим x в степни n
 */
function pow(x, n) { //возводим в степень
    return x ** n;
}
/**
 * вычисляет сумму от 1 до n
 * @param {number} n 
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
 * @param {number} n 
 * @returns 
 */


function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);

}


/**
 * число Фибаначи
 * @param {number} n 
 * @returns вывод Bigint числа Фибаначи
 */


function fib(n) {// получение числа Фибаначи
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
 * @param {number} x 
 * @returns выводит trye если x меньше y, false если наоборт, null если они равны
 */
function compare(x) {// принимаем цедочисленное значение
    return function(y){
        if (x < y) return true
        else if (x > y) return false
        else if (x = y) return null;
    }
}
