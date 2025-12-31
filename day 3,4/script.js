
const todoList = [
    {
        name: "Read for exam",
        isComplete: false,
    },
    {
        name: "Complete html day 1",
        isComplete: true
    },
    {
        name: "Complete html day 2",
        isComplete: true
    }
]

todoList.push({
    name: "My new task",
    isComplete: false
})

todoList[0].isComplete = true;

const myListItems = document.getElementById("task-list");

for (let task of todoList) {
    const newTask = document.createElement("li");

    newTask.innerHTML = task.name;

    if (task.isComplete) {
        newTask.className = "complete"
    } else {
        newTask.className = "incomplete"
    }

    const buttonToChange = document.createElement("button");
    buttonToChange.innerHTML = task.isComplete ? "Revert" : "Mark as done"

    newTask.className = task.isComplete ? "complete" : "incomplete";

    myListItems.appendChild(newTask);
    myListItems.appendChild(buttonToChange);
}
