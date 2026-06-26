const taskInput=document.getElementById("taskInput");

const taskList=document.getElementById("taskList");

const taskCount=document.getElementById("taskCount");

let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function renderTasks(){

taskList.innerHTML="";

taskCount.textContent=tasks.length;

tasks.forEach((task,index)=>{

const li=document.createElement("li");

li.className="task";

if(task.completed){

li.classList.add("done");

}

li.innerHTML=`

<span>${task.text}</span>

<div>

<button class="complete"

onclick="toggleTask(${index})">

✔

</button>

<button class="delete"

onclick="deleteTask(${index})">

🗑

</button>

</div>

`;

taskList.appendChild(li);

});

saveTasks();

}

function addTask(){

if(taskInput.value.trim()===""){

alert("Please enter a task.");

return;

}

tasks.push({

text:taskInput.value,

completed:false

});

taskInput.value="";

renderTasks();

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

renderTasks();