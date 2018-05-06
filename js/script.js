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
    let listItems = document.getElementById('listItems');

    let newItem = document.createElement('li');
    newItem.innerText = text;

    listItems.insertBefore(newItem, listItems.childNodes[0]);

}
