// 
//  document.querySelector("#text-input").addEventListener('keypress', function (e){
//   if (e.which === 13){
//   }
// });
// console.log(hitEnter);



function markDone(){
let todoList = document.querySelector('UL');
todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('done');
  }
}, false);
console.log(todoList);
}
markDone();

function clickButton(){
document.getElementById('button').addEventListener('click' , function(){
  let itmEntered = document.getElementById('text-input').value;
  if (itmEntered) {
    addToList(itmEntered);
    document.getElementById('text-input').value = "";
  }else {alert('Looks like you forgot to add something to do!');
}
});
}

clickButton()


function addToList(text){
    let todo = document.getElementById('todo');

    let newItem = document.createElement('li');
    newItem.innerText = text;
    newItem.classList.toggle("todoItm");

    todo.insertBefore(newItem, todo.childNodes[0]);

    document.getElementById('placeHolder').style.display = "none";

}
