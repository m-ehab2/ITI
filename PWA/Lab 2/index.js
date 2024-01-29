//------------Handle Notification Permissions
if (Notification.permission === "granted") {
    document.getElementById("eNotification").style.display = "none";
}
document.getElementById("eNotification").addEventListener("click", function (e) {
    Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
            console.log("Notification permission granted");
            e.target.style.display = "none";
        } else {
            console.log("Notification permission denied");
        }
    });
});
//------------Get User Input
document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = e.target.getElementsByTagName("input");
    console.log(inputs);
    let values = [];
    for (const input of inputs) {
        if (input.value !== "Add Task") {
            values.push(input.value);
        }
    }
    console.log(values);
    addItem(values)
    updateTable();
    for (const input of inputs) {
        if (input.value !== "Add Task") {
            input.value = "";
        }
    }
});

//------------Initialize Database
var db = new Dexie("ToDoList");
db.version(1).stores({
    toDoList: "++id,title,due,notified",
});
console.log("Using Dexie v" + Dexie.semVer);

updateTable();
function addItem(Todo) {
    const [year, month, day] = Todo[3].split('-').map(Number);
    const hour = Number(Todo[1]);
    const minute = Number(Todo[2]);
    const dateObject = new Date(year, month - 1, day, hour, minute);
    console.log(dateObject);
    db.open().then(function () {
        return db.toDoList.add({ title: Todo[0], due: dateObject, notified: false });
    }).catch(function (e) {
        console.log(e);
    });
}

//------------Function to refresh table in html
async function updateTable() {
    let todos = await getData().then(function (items) {
        return items;
    });
    console.log(todos);
    const tableBody = document.querySelector("#todoTable tbody");
    tableBody.innerHTML = "";
    todos.forEach((todo) => {
        const row = document.createElement("tr");
        row.id = todo.id;
        if (todo.notified) {
            row.classList.add('notified')
        }
        const titleCell = document.createElement("td");
        titleCell.innerHTML = todo.title;
        const dueDateCell = document.createElement("td");
        dueDateCell.innerHTML = todo.due;
        const deleteButtonCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteTodo(todo.id);
        });
        deleteButtonCell.appendChild(deleteButton);
        row.appendChild(titleCell);
        row.appendChild(dueDateCell);
        row.appendChild(deleteButtonCell);
        tableBody.appendChild(row);
    });
}
//function to deleteTodos
function deleteTodo(todoId) {
    db.open().then(function () {
        db.toDoList.delete(todoId)
            .then(() => {
                console.log(`Todo with ID ${todoId} deleted successfully`);
                const todoElement = document.getElementById(todoId);
                if (todoElement) {
                    todoElement.remove();
                    console.log(`HTML element with ID ${todoId} removed from the DOM`);
                }
            })
            .catch(error => {
                console.error(`Error deleting todo with ID ${todoId}:`, error);
            });
    }).catch(function (e) {
        console.error('Error opening database:', e);
    });
}

//------------function to get all data from the db for viewing
function getData() {
    return db.open().then(function () {
        return db.toDoList.toArray();
    }).catch(function (e) {
        console.log(e);
    });
}

//------------function to check for due of tasks
function checkDueTasks() {
    const currentTime = new Date();
    currentTime.setSeconds(0);
    db.toDoList.toArray()
        .then(todos => {
            todos.forEach(todo => {
                todo.due.setSeconds(0)
                if (Math.abs(todo.due - currentTime) < 10000 && !todo.notified) {
                    const notification = new Notification('Task Due', {
                        body: `Task "${todo.title}" is due now!`,
                    });
                    db.toDoList.update(todo.id, { notified: true })
                        .then(() => console.log(`Notification sent for task: ${todo.title}`))
                        .catch(error => console.error(error));
                }
            });
            updateTable();
        })
        .catch(error => console.error(error));
}

setInterval(checkDueTasks, 5000);


