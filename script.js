const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        taskName.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(deleteBtn);

    li.appendChild(taskName);
    li.appendChild(buttonContainer);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});