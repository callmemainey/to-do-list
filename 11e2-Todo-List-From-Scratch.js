// ON LOAD
const todoListArray = JSON.parse(localStorage.getItem('saved')) || [{name: '', dueDate: ''}];
renderHTML();

// BUTTON CLICKS

function addTodo() {          
  const inputElement = document.querySelector('.js-todo-input')
  const name = inputElement.value
  const dueDateElement = document.querySelector('.js-todo-due-date-input')
  const dueDate = dueDateElement.value
  if (name === '' || dueDate === '') {
    alert(`You need to enter both a date and a To-do!`);
  } else {
    todoListArray.push({name, dueDate});      
    console.log(todoListArray);
    inputElement.value = '';
    dueDateElement.value = '';
    renderHTML(); 
    saveToStorage();
  }     
}

function clearHTML() {
  localStorage.removeItem('saved');
}

// PRESS ENTER

function pressEnter() {
  if (event.keyCode === 13) {
    addTodo();
  }
}

// ADD HTML TO PAGE

function renderHTML() {
  let todoListHTML = '';
  for (let i = 1; i < todoListArray.length; i++) {
    const todoObject = todoListArray[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `<p class="date date-p">${dueDate}</p>
                  <p class="to-do-p">${name}</p>                      
                  <button class="delete" onclick="todoListArray.splice(${i}, 1); renderHTML();">Delete</button>`
    todoListHTML += html;
  }
  document.querySelector('.js-added-todo-grid').innerHTML = todoListHTML
  saveToStorage();
}



// SAVE TO LOCAL STORAGE 

function saveToStorage () {
  localStorage.setItem('saved', JSON.stringify(todoListArray));
}
