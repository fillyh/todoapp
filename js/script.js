//
// const myForms = document.forms;
// console.log(myForms[0]);

// const itmDone = document.querySelector('li');
// function markDone(){
// itmDone.addEventListener('click',(e)=>{
//     itmDone.classList.add('done');
// })
//
// }
// markDone();


document.getElementById('button').addEventListener('click' , function(){
  let itmEntered = document.getElementById('text-input').value;
  if (itmEntered) {
    addToList(itmEntered);
    document.getElementById('text-input').value = "";
  }else {alert('Looks like you forgot to add something to do!');
}

});


function addToList(text){
    let todo = document.getElementById('todo');

    let newItem = document.createElement('li');
    newItem.innerText = text;

    todo.insertBefore(newItem, todo.childNodes[0]);

}
