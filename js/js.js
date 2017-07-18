//  Task 1


let now = new Date();
let nowYear = now.getFullYear();


const submitTaskOne = document.querySelector('.button--taskOne');
submitTaskOne.addEventListener('click', goTaskOne);

let resTaskOne = document.querySelector('.textRes--taskOne');

function goTaskOne(e) {
    e.preventDefault();
    let birthday = document.querySelector('.age').value;
    let birthdayYear = new Date(birthday);
    let year = birthdayYear.getFullYear();
    getAge(year, nowYear);
}

function getAge(birthYear, todayYear) {
    let yourAge = todayYear - birthYear;
    if (0 >= yourAge || yourAge > 100) {
        resTaskOne.textContent = "Что-то вы не то ввели";
    } else {
        resTaskOne.textContent = "Вам исполнилось " + yourAge + " лет";
    }
}

// Task 2

const inputs = document.querySelectorAll('.getNum');
const submitTaskTwo = document.querySelector('.button-taskTwo');
const resTaskTwo = document.querySelector('.textRes--taskTwo');
submitTaskTwo.addEventListener('click', goCalck);


function goCalck(e) {
    e.preventDefault();
    resTaskTwo.textContent = getMaxNum(isItNum(getArray(inputs)));
}

function getArray(obj) {
    let arr = [];
    for (let i = 0; i < obj.length; i++) {
        arr[i] = obj[i].value;
    }
    return arr;
}

function isItNum(someArr) {
    for (let i = 0; i < someArr.length; i++) {
        someArr[i] = parseFloat(someArr[i]);
    }
    return someArr;
}

function getMaxNum(someArr) {
    let maxNum;
    top:
        for (let i = 0; i < someArr.length; i++) {
            if (isNaN(someArr[i])) {
                maxNum = "Нужны числа, а не это!";
                break top;
            } else {
                maxNum = "Максимальное число " + Math.max(...someArr);
            }
        }
    return maxNum;
}

// Task 3

let apartNum = document.querySelector('.apartNum');
let resTaskThree = document.querySelector('.textRes--taskThree');
let resTextThree = "Квартира находится ";

const submitTaskThree = document.querySelector('.button-taskThree');
submitTaskThree.addEventListener('click', goTaskThree);

function goTaskThree(e) {
    e.preventDefault();
    getEnterNum(apartNum.value);
}

function getEnterNum(num) {
    num = parseFloat(num);
    if (isNaN(num)) {
        resTaskThree.textContent = "Введите номер квартиры";
    } else {
        if (0 < num && num <= 20) {
            resTaskThree.textContent = resTextThree + "в первом подъезде";
        } else if (20 < num && num <= 64) {
            resTaskThree.textContent = resTextThree + "во втором подъезде";
        } else if (64 < num && num <= 80) {
            resTaskThree.textContent = resTextThree + "в третьем подъезде";
        } else {
            resTaskThree.textContent = "В этом доме нет такой квартиры";
        }
    }
}

// Task 4

let obj = {
    ivan: '333',
    ssss: '666',
    gibs: '0000'
}

const login = document.querySelector('.login');
const pass = document.querySelector('.pass');
let resTaskFour = document.querySelector('.textRes--taskFour');

const submitTaskFour = document.querySelector('.button-taskFour');

submitTaskFour.addEventListener('click', goTaskFour);

function goTaskFour(e) {
    e.preventDefault();
    resTaskFour.textContent = isCorrect(login.value, pass.value);
}

function isCorrect(log, pass) {
    return (obj[log] === pass) ? 'Добро пожаловать' : 'ошибка';
}

// Task 5

const inputsTask5 = document.querySelectorAll('.getNumTaskFive');
const resTaskFive = document.querySelector('.textRes--taskFive');

const submitTaskFive = document.querySelector('.button-taskFive');
submitTaskFive.addEventListener('click', goFive);

function goFive(e) {
    e.preventDefault();
    resTaskFive.textContent = getMaxNum(isItNum(getArray(inputsTask5)));
}

// Задачи на цикл for

// Task 1

for (let i = 0; i <= 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Task 2 

for (let i = 200; i >= 0; i--) {
    console.log(i);
}

//Task 3 
let sumN = 0;

function summary(sum) {
    for (var i = 0; i <= 100; i++) {
        sum += i;
    }
    console.log(sum);
}

summary(sumN);

// Циклы задача 4

const numForExponent = document.querySelector('.numForExponent');
const exponent = document.querySelector('.exponent');
const resLoopsFour = document.querySelector('.textRes--loopsFour');

const submitLoopsFour = document.querySelector('.button--loopsFour');
submitLoopsFour.addEventListener('click', goLoopsFour);

function goLoopsFour(e) {
    e.preventDefault();
    resLoopsFour.textContent = getExponent(numForExponent.value, exponent.value);
}

function getExponent(num, exp) {
    let tmp = num;
    for (let i = 1; i < exp; i++) {
        tmp *= num;
    }
    return num + " в степени " + exp + " равно " + tmp;
}

// Циклы задача 5

for (let i = 1; i <= 9; i++) {
    console.log(7 * i);
}

// Циклы задача 5.1

let numForMult = 7;

function mult(someNum) {
    for (let i = 1; i < 10; i++) {
        console.log(someNum * i);
    }
}

mult(numForMult);

// Циклы 5.2 

let number = 1;
let quantity = 50;

function summation(number, quantity) {
    for (var i = 1; i <= quantity; i++) {
        number *= i;
    }
    return number;
}

console.log(summation(number, quantity));

// Циклы 5.3

let symbols = document.querySelector('.symbols');


let beginSymb = 1000;
let endSymb = 2000;

function symbolsFunction(begin, end) {
    for (let i = begin; i <= end; i++) {
        symbols.innerHTML += "&#" + i + ";" + " ";
    }
}

symbolsFunction(beginSymb, endSymb);