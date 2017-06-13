var myCar = {
  make: 'jeep',
  model: 'wrangler',
  year: 2014
};

var myOtherCar = {
  make: 'jeep',
  model: 'wrangler',
  year: 1997
};

function Car(make, model, year, color){
  this.doors = 2;
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

var myJeep = new Car('jeep', 'wrangler', 2014, 'black');
var myOtherJeep = new Car('jeep', 'wrangler', 1997, 'red');

/*
console.log(myCar);
console.log(myJeep);
console.log(myOtherJeep.model);
*/

// setTimeOut
function delay(){
  setTimeOut(sayHello, 4000);
};

function sayHello(){
  alert("Hello");
};

var greeting = setInterval(sayHello, 500);
var greet = 0;

function sayHi(){
  greet++;
  console.log("Hi " + greet);
};

var btns = document.querySelectorAll('button');
for(let btn of btns){
  btn.addEventListener('mouseover', function(evt){
    setTimeOut(function(){
      getBtn(evt);
    }, 3000);
  });
  btn.addEventListener('mouseout', function(evt){
    clearTimeout(timer);
  });
}

function getBtn(evt){
  console.log(evt.target);
  evt.target.classList.add('megaBtn');
  evt.target.style.color = 'magenta';
  evt.target.style.fontSize = '200%';
}

/*
target the figure
target the figcaption and display:none; by def
on figure mouseenter, after 500ms figcaption display: block
visibility: hidden & visibility: visible
opacity: 0; & opacity 1;
if mouseleave before 500ms, clear the timeout
*/
