var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
//This is Building the todo list 
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  //Adds whatever the user inputs to the li and creates the iteration length
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  //This creates the next iteration li to add to the list
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// This starts the function upon loading page
function init() {
  // TODO: What is the purpose of the following line of code?
  // this pulls the local storage of saved todos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if no todos are present it will pull the local storage todo and 
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  //This runs the function that builds the todo list upon loading the page
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  //This saves the todo list to the local storage
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
//this waits for the submit button to be pressed and then runs the function to load the list 
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // if this todo field is emoty it leaves the function and doesnt write a blank todo
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
 //appends new elements to the end of the array and returns the new length of the array
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  //it will first check for stored todos and then render the list to the page
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});
//starts function upon page loading
init();
