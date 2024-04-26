var h1Id=document.getElementById('h1');
var buttonId=document.getElementById('button22');
var counter=localStorage.getItem('counter') ?? 0;
var upgrade1Button=document.getElementById('upgrade1');
var click=document.getElementsByClassName('click');




h1Id.textContent = '📀' + counter;

buttonId.addEventListener('click', function(){
    counter++;
    h1Id.textContent='📀'+counter;
    localStorage.setItem('counter', counter);
});