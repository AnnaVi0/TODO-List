const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWrapper = document.querySelector('.todos-wrapper');
 
let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));

let todoItemElmnts = []; 

let highElem = [];
let mediumElem = [];
let lowElem = [];


function Task(description){
  this.description = description;
  this.completed = false;
}


let createTemplate = (task, index) => {
  return `
  <div class="todo-item" ${task.completed ? "checked" : ""}>
            <div class="description"  contenteditable="true">${task.description}</div>
            <div class="buttons">
                <input onclick = 'completeTask(${index})'class = "btn-complete" type="checkbox" ${task.completed ? "checked" : ""}>
                <button onclick = 'deleteTask(${index})'class="btn-delete">Delete</button>
                
                <button onclick = 'addHigh(${index})'>High</button>
                <button onclick = 'addMedium(${index})'>Medium</button>
                <button onclick = 'addLow(${index})'>Low</button>
            </div>
           
  `

}


const fillHtmlList = () => {
 todosWrapper.innerHTML = '';
 if (tasks.length > 0 ) {
   tasks.forEach((item, index) => {
    todosWrapper.innerHTML += createTemplate(item, index);
   });
   todoItemElmnts = document.querySelectorAll('.todo-item')
 }
} 
fillHtmlList();
  

 const updateLocal = () => {
 localStorage.setItem('tasks', JSON.stringify(tasks));
 } 

 const completeTask = index =>{
  tasks[index].completed = !tasks[index].completed;
  if (tasks[index].completed) {
    todoItemElmnts[index].classList.add('checked');
  } else {
    todoItemElmnts[index].classList.remove('checked');
  }
    
    updateLocal();
    fillHtmlList();

  }


addTaskBtn.addEventListener('click', () => { 
  tasks.push(new Task(deskTaskInput.value));
  updateLocal();
  fillHtmlList();
  deskTaskInput.value = '';
})

const  deleteTask = (index) => {
 setTimeout(() => {
  tasks.splice(index, 1);
 updateLocal();
 fillHtmlList();
 }, 150)
}
const addHigh = (index) => {
  let hElem = tasks[index]
  highElem.push(hElem);
  console.log(highElem);
}
const addMedium = (index) => {
  let mElem = tasks[index].description;
  mediumElem.push(mElem);
  console.log(highElem);
}
const addLow = (index) => {
  let lElem = tasks[index]
  lowElem.push(lElem);
  console.log(highElem);
}
  
