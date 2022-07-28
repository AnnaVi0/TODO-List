let addMessage = document.querySelector('.textkeep'),
    plusButton = document.querySelector('.add'),
     todo = document.querySelector('.todo')
     ;

let todoList = [];    
if (localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}                                                       // для хранения всех наших дел нужен будет массив

                                                          // сейчас будет написан обрабботчик события
                                                         // который будет выполнять действия, которые происходят при нажатии на кнопку
 plusButton.addEventListener('click', function(){           // отслеивает событие click и запускает function()
                                                     // кажде новое дело мы будем записывать в объект, а этот объект в массив
  let newTodo = {                                                //содержит данные последнего сообщения
    todo: addMessage.value, 
    checked: false,                                         //обозначает, выполнено дело или нет, т.е по умолчанию всегда принимает значение false
    important: false                                        // это степень важности, тк можно выбрать важным что-нибо
  };                     
  todoList.push(newTodo); 
  displayMessages();   
  localStorage.getItem('elmnt', JSON.stringify(todoList));          //добавляет элементы в массив
 });
     
 let time = new Date().toLocaleDateString();


 function displayMessages(){                //будет делать перебор массива и выводить каждый объект на страницу, в виде тега li
    let displayMessage = '';                                              //здесь todo - свойство
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
   todo.innerHTML = displayMessage;                  //на  этом этапе одно задание заменяет другое, решить проблему
 
 });                                               // галочка чекбокса не влияет на появление и удаление дел                                                     //при обновлении страницы, дела удаляются
  };
   
  /*function loseIt(clean_${i}){
    document.getElementById(clean_${i});
  }
   
  */
