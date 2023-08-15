//Задание 1
// Выведите числа от 1 до 10 в консоль
let arr = new Array();
for (let i = 1; i <= 21; i ++){
arr.push(i);
}
console.log(arr);

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let arr2 = new Array();
for (let i = 0; i <= 21; i += 2){
arr2.push(i);
}
console.log(arr2);

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let arr3 = new Array();
for (let i = 10; i >= 1; i -= 1){
arr3.push(i);
}
console.log(arr3);

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
let arr4 = new Array();
for (let i = 1; i <= 10; i ++){
    console.log(i + ' * 5 = ' + (i * 5));
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let arr5 = new Array();
for (let i = 1; i <= 100; i ++){
arr5.push(i);
}
let sum = arr5.reduce((acc, i)=> acc + i);
console.log(sum); // не уверена что это правильно

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i <= array.length; i++){ //где-то тут в консоль внезапно выдается undefined, не очень понятно почему.
console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum2 += numbers[i];
}
console.log(sum2); //15

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
let i = 0;
for(let i = 0; i < animals.length; i++){
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
let h = 0;
while (h < str.length) {
    console.log(str[h]);
    h++;
}
//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for(let dig of array){
    console.log(dig);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
let s = 0;
const space = " ";
while(s < sentences.length){
    let str = sentences[s]
    console.log(str)
    s++
    console.log(str.split(space)) //это максимум до чего я додумалась((
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let sum3 = 0;
for(let i of numbers){
    sum3 += i;
}
console.log(sum3);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
let index = 0;
for(let index of list){
    console.log(index.length)
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ['Hello', 'world', '!'];
for (let i = 0; i < words.length; i ++) {
const word = words[i];
const upperWord = word.toUpperCase();
words[i] = upperWord;
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
for (let letter of greeting) {
    if (vowels.includes(letter)) { 
        vowelCount += 1;
    }
}
console.log(vowelCount);

// console.log()

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words_ = ['Hello', 'world', '!'];
const str2 = words_.join(' ');
console.log(str2);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let arr6 = new Array();
let a = 1;
while(a <= 10){
    arr6.push(a);
a++
}
console.log(arr6); //не очень понятно это надо массивом или в столбик, это вариант с массивом.
// в столбик будет так:
// let a = 1;
// while(a <= 10){
// console.log(a);
// a++
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let arr7 = new Array();
let b = 10;
while(b >= 1){
    arr7.push(b);
b --
}
console.log(arr7);

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;
let c = 0;
while (c < allNumbers.length) {
    if (allNumbers[c] <= 0) {
    allPositive = false;
    break; 
    }
    c++;
}
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
let d = 0;
do{
    console.log(random[d]);
    d ++
}while(random[d] > 0);


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let arr8 = new Array();
for (let i = 1; i <= 100; i ++){
    if(i % 3 >= 1){
    arr8.push(i);
    }}
console.log(arr8);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let y = 0;
// do{
// let x = prompt('введи число') 
// x = Number(x);
// y += x;
// console.log(y);
// }while(y < 100);
                        //это всё надо раскомментировать)

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

function makeBlue(){
    const paragraphs = document.querySelectorAll("h4")
    paragraphs.forEach(function(paragraph){
        paragraph.style.backgroundColor = "blue";
    })
} // не работает

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
const z = randomNumber();
// console.log(z);
do{
        function getRandomLetter(alphabet){
        let randomLetter = Math.floor(Math.random() * alphabet.length);
        return alphabet.charAt(randomLetter);
        }
        const letter = getRandomLetter(alphabet)
        // console.log(letter)
        randomString += letter;
        
}while(randomString.length < z)
console.log(randomString);