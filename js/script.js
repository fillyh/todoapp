//Elements that need to be created when the button is clicked
function addToList(text){
    let todo = document.getElementById('todo');

    let newItem = document.createElement('li');
    newItem.innerText = text;
    newItem.classList.toggle("todoItm");

    todo.insertBefore(newItem, todo.childNodes[0]);

    document.getElementById('placeHolder').style.display = "none";
}

//Clicking the button adds Elements
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
clickButton();

//Marks completed elements done
function markDone(){
let todoList = document.querySelector('UL');
todoList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    // e.target.contentEditable = true;
    e.target.classList.toggle('done');
    // todoList.removeChild(todoList.childNodes[0]); //removes item
  }
}, false);
console.log(todoList);
console.log(todoList.childNodes[0]);
}
markDone();


  // document.querySelector("#text-input").addEventListener('keypress', function(e) {
  //   e.preventDefault();
  //   if (e.keyCode ===13){
  //     let itmEntered = document.getElementById('text-input').value;
  //     addToList(itmEntered);
  //     document.getElementById('text-input').value="";
  //     document.getElementById("button").click();
  //   }
  // })


  function viewToDo(){
  document.getElementById('viewToDo').addEventListener('click' , function(e){
    let hideComplete = document.getElementsByClassName('done');
    for (var i = 0; i < hideComplete.length; i++){
      hideComplete[i].style.display = "none";
    }
  });
  }
  viewToDo();

  function viewAll(){
  document.getElementById('viewAll').addEventListener('click' , function(e){
    let showComplete = document.getElementsByClassName('done');
    for (var i = 0; i < showComplete.length; i++){
      showComplete[i].style.display = "block";
    }
  });
  }
  viewAll();
