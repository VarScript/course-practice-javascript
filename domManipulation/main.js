const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.getElementsByClassName('paragraph');
const par = document.getElementById('par');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    par,
    paragraph,
    input
});

h1.innerHTML = 'New title <br> Great!'; // it allow modify the HTML
h1.innerText     = 'New title <br> Great!'; // it allow modify the text

//class
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'red');

//add class
h1.classList.add('red');
h1.classList.remove('green');
// h1.classList.toggle('green');
// h1.classList.contains('green');


input.value = 'New Value';


//img
const img = document.createElement('img');
img.setAttribute('src', 'https://assets.digitalocean.com/articles/67009/html-file.png');
console.log(img)

par.append(img);


// --   

const input1 = document.querySelector('#cal1');
const input2 = document.querySelector('#cal2');
const btn = document.querySelector('#btnCalculate');
const result = document.querySelector('#result');

function btnOnClick() {
    //console.log('Listening the event of the click');
    const plus = input1.value + input2.value;
    result.innerText = "Result: " + plus;
}