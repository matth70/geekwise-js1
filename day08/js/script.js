// window.addEventListener('scroll', function(e){
//   console.log(window.scrollY);
// });

// create nav with 2 inputs and 1 submit btn
// add styling with flexbox

var myForm = document.querySelector('form#nav');
form[2].addEventListener('click', getInputs);

function getInputs(evt){
  evt.preventDefault();
  // for(let i = 0; i < form.elements.length; i++){
  //   // console.log(form.element[i].value);
  //   inputArr.push(form.element[i].value);
  // }
  // console.log(inputArr);
  document.body.innerHTML += sticky;
  stickySetup();
}

var sForm = document.createElement('form');
    sBtn = document.createElement('button');
    sInput = document.createElement('input');
sForm.id = 'sticky';
sBtn.id = 'add';
sBtn.textContent = '+';
s.Input.type = 'text';
sInput.placeholder = 'todo'
sForm.appendChild(sBtn);
sForm.appendChild(sInput);
document.body.appendChild(sForm);

sBtn.addEventListener('click', addTodo);

function addTodo(evt) {
  evt.preventDefault();
  var newTodo = document.createElement('input');
  newTodo.type = 'text';
  newTodo.placeholder = 'todo';
  sForm.appendChild(newTodo);
}

/*var sticky =
`
<form id="sticky">
  <button id="add">+</button>
  <input type="text" placeholder="todo">
</form>
`;*/

function stickySetup() {
  var stickySubmit = document.querySelector('#sticky');
  stickySubmit[0].addEventListener('click', function(evt) {
    evt.preventDefault();
    stickySubmit.appendChild(todo)
  });
}
