//Elements that need to be created when the button is clicked
function addToList(text){
    let todo = document.getElementById('todo');

    let newItem = document.createElement('li');
    newItem.innerText = text;
    newItem.classList.toggle("todoItm");

    todo.insertBefore(newItem, todo.childNodes[0]);

    // todoBtn.classList.remove('btns-active');
    // allBtn.classList.add('btns-active');
    // doneBtn.classList.remove('btns-active');
    for (var i = 0; i < ulList.length; i++){
      ulList[i].style.display = "block";
    }


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
    // e.target.classList.remove('todoItm');
    // e.target.classLisst.toggle('done');
    e.target.classList.replace('todoItm', 'done');
    // todoList.removeChild(todoList.childNodes[0]); //removes item
  }
}, false);
console.log(todoList);
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

//Tab Menu section
let todoBtn = document.getElementById('viewToDo');
let doneBtn = document.getElementById('viewDone');
let allBtn = document.getElementById('viewAll');

let todoItm = document.getElementsByClassName("todoItm");
let complete = document.getElementsByClassName('done');
let ulList = document.getElementsByTagName('LI');
//view Todo Items
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

  function displayCompleted(){
      document.getElementById('viewDone').addEventListener('click' , function(e){
        for (var i = 0; i < complete.length; i++){
          complete[i].style.display = "block";
        }
  });
}
displayCompleted();

// function viewCompleted(){
// document.getElementById('viewDone').addEventListener('click' , function(e){
//   for (var i = 0; i < todoItm.length; i++){
//     todoItm[i].style.display = "none";
//     let showCompleted = todoItm[i].classList.contains('done');
//     showCompleted.style.display = "block";
//   }
//
// });
//
// }
// viewCompleted();
