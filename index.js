const inputField = document.getElementById("input");
const addBtn = document.getElementById("addBtn");

const tasksContainer = document.querySelector(".tasks-container");



let tasks = [

    //here goes the data for each task
]

function displayNoTasksMessage() {
const noTasksMessage = document.querySelector(".no-tasks-message");
    if (tasks.length > 0) {
        noTasksMessage.style.display = "none";
        
    }
    else if (tasks.length === 0) {
        noTasksMessage.style.display = "block";
      
    }

}

function deleteTask(index){
    if (confirm(`Are you sure you want to delete this task? "${tasks[index].text}"`)) {
    tasks.splice(index, 1); 
    tasksContainer.innerHTML = "";
    fillTasksContent();
    displayNoTasksMessage()
    console.log(tasks.length)}
  
}
function editTask(index){
newText = prompt("Enter new task", tasks[index].text);
tasks[index].text = newText;
tasksContainer.innerHTML = "";
fillTasksContent();  
}

function toggleCompletionStatus(index){
    const task = document.querySelector(".task");
    tasks[index].completed = !tasks[index].completed;
    tasksContainer.innerHTML = "";
    fillTasksContent();
}



function fillTasksContent() {
    let index = 0;
    tasks.forEach((task) => {
        
        tasksContainer.innerHTML += ` <div class="task" style="background: ${task.completed ? "#a7f1a7" : null}">
        <div class="task-details">
            <h3 style="text-decoration: ${task.completed ? "Line-through" : null}">${task.text}</h3>
            <p style="text-decoration: ${task.completed ? "Line-through" : null}">${task.date}</p>
        </div>
        <div class="action-buttons">
            <span onclick="toggleCompletionStatus(${index})" id="completed" class="material-symbols-outlined">${!task.completed ? "done" : "cancel"}</span>
            <span onclick="deleteTask(${index})" id="delete" class="material-symbols-outlined">delete</span>
            <span onclick="editTask(${index})" id="edit" class="material-symbols-outlined edit">edit</span>
        </div>
        </div>`
       index++; 
    })
    displayNoTasksMessage()
}





fillTasksContent();



addBtn.addEventListener("click",function() {
tasksContainer.innerHTML = "";
const now = new Date();
    if(inputField.value.length > 0 ) {
        tasks.push({
            text: inputField.value,
            date:  now.getDate() + "/" + (now.getMonth() + 1) + "/" +  now.getFullYear()+ " | " + now.getHours() + ":" + now.getMinutes(),
            isCompleted: false
        })
        
        inputField.value = "";}
        fillTasksContent();
        console.log(tasks)
}
)
fillTasksContent();