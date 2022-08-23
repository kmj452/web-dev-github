const todoValue = document.querySelector("#todoValue");
const todoButton = document.querySelector("#todoButton");
const todoList = document.querySelector("#todoList");

let todos = [];

function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

//function filterTodo(arr){
    //if(arr.id !== parseInt(deleteLi.id)) {//
  //      return true;
  //  }
  //  else
  //  return false;
//}

function deleteTodo(event){
    const deleteLi = event.target.parentElement;
    deleteLi.remove();
    todos = todos.filter(function(arr){  // todos.filter((todos) =>todos.id != deleteLi.id);
        if(arr.id != parseInt(deleteLi.id)){
            return true;
        }else
        return false;
    });  
    saveTodos();  
}

function showTodo(todoObject){
    const newLi = document.createElement("li");  
    newLi.id = todoObject.id;;
    const newButton = document.createElement("button"); 
    newLi.innerHTML = todoObject.text;
    newButton.className = "delete";
    newButton.innerHTML = "X";
    newButton.addEventListener("click", deleteTodo);
    newLi.appendChild(newButton);
    todoList.appendChild(newLi);
    
}

function newTodo(){
    const todoInput = todoValue.value; //todoValue.value
    todoValue.value = " ";
    const todoObject = {
        text : todoInput,
        id : Date.now()
    }
    todos.push(todoObject);     
    showTodo(todoObject);
    saveTodos();
}

todoButton.addEventListener("click",newTodo);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !=null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(showTodo);
}


