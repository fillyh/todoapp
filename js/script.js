
const myForms = document.forms;
console.log(myForms[0]);

const itmDone = document.querySelector('li');
function markDone(){
itmDone.addEventListener('click',(e)=>{
    itmDone.classList.add('done');
})

}
markDone();
