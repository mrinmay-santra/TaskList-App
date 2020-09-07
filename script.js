// Selecting All the elements

const taskInputField = document.querySelector(".task-input-field");
const addTaskBtn = document.querySelector(".add-task-btn");
const deleteTaskBtn = document.querySelector(".delete-task-btn");
const taskList = document.querySelector(".task-list");


let taskListArray;
// This function fetches tasks from the localStorage

function fetchTasksFromLocalstorage(){

  if (localStorage.getItem("tasks") === null   ){
    taskListArray=[]
  }
  
  else{
    
    // taskListArray=JSON.parse(localStorage.getItem("tasks"))
    taskListArray=JSON.parse(localStorage.getItem("tasks"));
    // console.log( typeof (taskListArray));
  }
return taskListArray;
}


//defining addNewTask() function which will add new task in the taskList
function addNewTask() {
  // Fetch the new task from Input value
  let newTask = taskInputField.value;
  // Add the newtask in the array so that we can store it into localStorage
  
  // Create an li element for the new task and assign the className
  if (newTask === "" || newTask == null || newTask == undefined) {
    alert("Please enter a valid task...");
  } else {
    //Create new task element for the tasklist
    let newListItemElement = document.createElement("li");
    newListItemElement.className = "task-list-item";
    //Create a text node and append into the <span> element, here the actual task content will be stored in span element
    let newTextNode = document.createTextNode(newTask);
    let newSpanElement = document.createElement("span");
    newSpanElement.appendChild(newTextNode);
    newSpanElement.className = "newTaskContent";

    newListItemElement.appendChild(newSpanElement);

    // Create delete icon and append into list item element
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "far fa-trash-alt fa-sm delete-icon";
    newListItemElement.appendChild(deleteIcon);

    // Append new task element in the <UL>
    taskList.appendChild(newListItemElement);
taskListArray=fetchTasksFromLocalstorage();
  taskListArray.push(newTask);

localStorage.setItem("tasks",JSON.stringify(taskListArray));

//This function will traverse thru all the task element and add the deleteTask() function to the deleteIcons
    addDeleteEvents();
  }
}






// Adding new task addEventListener
addTaskBtn.addEventListener("click", addNewTask);

// Delete All task button
function deleteAllTasks() {
  taskList.innerHTML = "";

  localStorage.clear();
}
//Delete all task eventlistener
deleteTaskBtn.addEventListener("click", deleteAllTasks);

// This function deletes all the tasks
function addDeleteEvents() {
  let allDeleteIcons = document.querySelectorAll(".delete-icon");
  allDeleteIcons = [...allDeleteIcons];
  allDeleteIcons.forEach((item) => {
    item.addEventListener("click", deleteSingleTask);
  });
}

//Delete a single task
function deleteSingleTask(event) {
  event.target.parentElement.remove();
}


// This function fetches tasks from localStorage and show them in browser
displayTasks();
function displayTasks(){
  taskListArray=fetchTasksFromLocalstorage();


taskListArray.forEach(element => {
  

let newListItemElement = document.createElement("li");
  newListItemElement.className = "task-list-item";
  //Create a text node and append into the <span> element, here the actual task content will be stored in span element
  let newTextNode = document.createTextNode(element);
  let newSpanElement = document.createElement("span");
  newSpanElement.appendChild(newTextNode);
  newSpanElement.className = "newTaskContent";

  newListItemElement.appendChild(newSpanElement);

  // Create delete icon and append into list item element
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt fa-sm delete-icon";
  newListItemElement.appendChild(deleteIcon);

  // Append new task element in the <UL>
  taskList.appendChild(newListItemElement);


});

  
  addDeleteEvents();


}



