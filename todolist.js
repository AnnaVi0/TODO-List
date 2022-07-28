let addMessage = document.querySelector('.textkeep'),
    plusButton = document.querySelector('.add'),
     todo = document.querySelector('.todo')
     ;

let todoList = [];    
if (localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}                                                       

                                                         
                                                        
 plusButton.addEventListener('click', function(){           
                                                     
  let newTodo = {                                                
    todo: addMessage.value, 
    checked: false,                                         
    important: false                                       
  };                     
  todoList.push(newTodo); 
  displayMessages();   
  localStorage.getItem('elmnt', JSON.stringify(todoList));          
 });
     
 let time = new Date().toLocaleDateString();


 function displayMessages(){                
    let displayMessage = '';                                              
 todoList.forEach(function(item, i){
   displayMessage += `
   <div class = 'step' id='clean_${i}'>
  <li>
  <input  type='checkbox' id='item_${i}' ${item.checked ? 'checked': '' }>
  <label for='item_${i}'>${item.todo}</label> 
  </li>
  <button class = 'knopka' onclick = 'loseIt()'>Удалить</button>
  </div>
  `;
   todo.innerHTML = displayMessage;                  
 
 });                                                                                                 
  };
   
  /*function loseIt(clean_${i}){
    document.getElementById(clean_${i});
  }
   
  */
