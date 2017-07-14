//  Task 1


let now = new Date();
let nowYear = now.getFullYear();


const submitTaskOne = document.querySelector('.button--taskOne');
submitTaskOne.addEventListener('click', goTaskOne);

let resTaskOne = document.querySelector('.textRes--taskOne');

const options = { year: '' }

function goTaskOne(e) {
    e.preventDefault();
    let birthday = document.querySelector('.age').value;
    let birthdayYear = new Date(birthday);
    let year = birthdayYear.getFullYear();
    getAge(year, nowYear);
}

function getAge(birthYear, todayYear) {
    let yourAge = todayYear - birthYear;
    resTaskOne.textContent = "Вам исполнилось " + yourAge.toLocaleString('Uk-uk', options) + " лет";
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
sumN = 0;

function summary(sum) {
    for (var i = 0; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

summary(sumN);