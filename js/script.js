//Elements that need to be created when the button is clicked
function addToList(text){
    let todo = document.getElementById('todo');

    let newItem = document.createElement('li');
    newItem.innerText = text;
    newItem.classList.add("todoItm");
    newItem.contentEditable = true;

    todo.insertBefore(newItem, todo.childNodes[0]);

    let viewOpts = document.getElementById('viewOpts');
    viewOpts.style.display="block";

    todoBtn.classList.remove('btns-active');
    allBtn.classList.add('btns-active');
    doneBtn.classList.remove('btns-active');
    for (var i = 0; i < ulList.length; i++){
      ulList[i].style.display = "block";
    };

    document.getElementById('placeHolder').style.display = "none";


}


//Marks completed elements done
let popUp = document.getElementById('popUp');

function markDone(){
let todoList = document.querySelector('UL');
todoList.addEventListener('dblclick', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.contentEditable = false;
    // e.target.classList.remove('todoItm');
    // e.target.classList.toggle('done');
    e.target.classList.replace('todoItm', 'done');
    popUp.style.display="block";
    // todoList.removeChild(todoList.childNodes[0]); //removes item
  }
}, false);
console.log(todoList);
}
markDone();

window.onclick = function(event){
  if (event.target == popUp){
    popUp.style.display="none";
  }
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

//Hit Enter Key
  document.querySelector("#text-input").addEventListener('keypress', function(e) {
    let key = e.which || e.keyCode;
    if (key ===13){
        e.preventDefault();
      document.getElementById("button").click();
    }
  });

//Tab Menu section
let todoBtn = document.getElementById('viewToDo');
let doneBtn = document.getElementById('viewDone');
let allBtn = document.getElementById('viewAll');

let todoItm = document.getElementsByClassName("todoItm");
let complete = document.getElementsByClassName('done');
let ulList = document.getElementsByTagName('LI');

//view Todo Items Button - Hide Completed
  function viewToDo(){
  document.getElementById('viewToDo').addEventListener('click' , function(e){
    todoBtn.classList.add('btns-active');
    allBtn.classList.remove('btns-active');
    doneBtn.classList.remove('btns-active');
    for (var i = 0; i < complete.length; i++){
      complete[i].style.display = "none";
    }
  });
  }
  viewToDo();

//Adds Display 'Block' to the items that had it removed
  function displayTodo(){
      document.getElementById('viewToDo').addEventListener('click' , function(e){
    for (var i = 0; i < todoItm.length; i++){
    todoItm[i].style.display = "block";
    }
  });
}
displayTodo();


//View All Items
  function viewAll(){
  document.getElementById('viewAll').addEventListener('click' , function(e){
    todoBtn.classList.remove('btns-active');
    allBtn.classList.add('btns-active');
    doneBtn.classList.remove('btns-active');
    for (var i = 0; i < ulList.length; i++){
      ulList[i].style.display = "block";
    }
  });
  }
  viewAll();

//View Comleted Items
  function viewCompleted(){
  document.getElementById('viewDone').addEventListener('click' , function(e){
    todoBtn.classList.remove('btns-active');
    allBtn.classList.remove('btns-active');
    doneBtn.classList.add('btns-active');
    for (var i = 0; i < todoItm.length; i++){
      todoItm[i].style.display = "none";
    }
  });
  }
  viewCompleted();
//Display 'block' to the completed items that had it removed
  function displayCompleted(){
      document.getElementById('viewDone').addEventListener('click' , function(e){
        for (var i = 0; i < complete.length; i++){
          complete[i].style.display = "block";
        }
  });
}
displayCompleted();
