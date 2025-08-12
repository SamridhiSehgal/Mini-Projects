let addTaskBtn = document.querySelector("#add-task-btn");
let clearAllBtn = document.querySelector("#clear-all-btn");
let pendingTasksUl = document.querySelector("#pending-tasks");
let completedTasksUl = document.querySelector("#completed-tasks");
let taskInput = document.querySelector("#task");
let startTimeInput = document.querySelector("#start-time");
let endTimeInput = document.querySelector("#end-time");

function formatTime(time) {
    if (!time) return "";
    let [hours, minutes] = time.split(":");
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return `${hours}.${ampm}`;
}
function addTask() {
    let taskValue = taskInput.value.trim();
    let startTimeValue = startTimeInput.value;
    let endTimeValue = endTimeInput.value;

    if (taskValue === "" || startTimeValue === "" || endTimeValue === "") {
        alert("Please fill in all fields: Task, Start Time, and End Time.");
        return;
    }

    let item = document.createElement("li");

    let formattedStartTime = formatTime(startTimeValue);
    let formattedEndTime = formatTime(endTimeValue);

    item.innerHTML = `<span>${taskValue} (${formattedStartTime} - ${formattedEndTime})</span>`;
    let completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.classList.add("complete-btn");
    item.appendChild(completeButton);
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    item.appendChild(deleteButton);
    pendingTasksUl.appendChild(item);
    taskInput.value = "";
    startTimeInput.value = "";
    endTimeInput.value = "";
}
function clearAllTasks() {
    pendingTasksUl.innerHTML = "";
    completedTasksUl.innerHTML = "";
}

addTaskBtn.addEventListener("click", addTask);

clearAllBtn.addEventListener("click", clearAllTasks);


document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains("complete-btn")) {
        let taskItem = event.target.parentElement;
        taskItem.classList.toggle("completed");
        event.target.remove(); 
        completedTasksUl.appendChild(taskItem);
    }
});