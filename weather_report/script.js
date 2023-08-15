const Cities = [
    "Praha",
    "Berlin",
    "Poznan",
    "Budva",
    "Rostov",
];
console.log(Cities)

let temperatures = [];

let c = 0;
do{
    let t = prompt('add temperature for ' + Cities[c])
    c++
    console.log(t)
    temperatures.push(t);
} while(c < Cities.length);

console.log(temperatures);

let citiesTemp = [];
let t = 0;
for(let i = 0; i < Cities.length; i++){
    const city = Cities[i];
    const temp = temperatures[t];
    const result = city + " " + temp +" C°"; 
    t++
    citiesTemp.push(result);
    console.log(result);
}
console.log(citiesTemp);

const sortedTemp = sorted(temperatures);
function sorted(item){
    item.sort(function (a, b) {
        return a - b;
    })
    return item;}
console.log(sortedTemp)

let min = sortedTemp[0];
let max = sortedTemp[sortedTemp.length - 1]


const citiesDiv = document.querySelector(".cities");
citiesTemp.forEach(item => {
    const listItem = document.createElement('p');
    listItem.textContent = item;
    citiesDiv.appendChild(listItem);
});

const tempsDiv = document.querySelector(".temps");
tempsDiv.innerHTML = "Minimum temperature " + min +" C°<br>Maximum temperature " + max +" C°";