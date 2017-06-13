var intro = document.querySelector('.intro'),
  h1 = document.querySelector('h1'),
  key = document.querySelector('.key');

window.addEventListener('keyup', function(evt){
  evt.preventDefault();
  intro.classList.add('hidden');
  key.parentElement.classList.remove('hidden');
  h1.textContent = evt.keyCode;
  key.textContent = evt.key.toUpperCase();

  if(evt.keyCode === 32){
    key.textContent = "Spacebar";
  }
});
