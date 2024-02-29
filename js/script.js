const element = document.querySelectorAll('.element');
const display = document.getElementById('display');
const equal = document.getElementById('equal');
const reset = document.getElementById('reset');
const del = document.getElementById('delete');

element.forEach(function(element) {
  element.addEventListener("click", function(){
    display.value += element.value;
  })
});

equal.addEventListener("click", function(){
  display.value = eval(display.value);
 });

reset.addEventListener("click", function(){
  display.value = '';
 });

del.addEventListener("click", function(){
  display.value = display.value.slice(0,-1);
 })
