// PART 2 - Adds tasks to the todolist
function addTask() {
    const button = document.getElementById('addButton');
    const todolist = document.getElementById('outputField');
    const input = document.getElementById('inputField');

    if (input.value === '') {
        return null;
    }

    // Creates a checkbox element that updates number of tasks completed when checked.
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('onchange', 'numberFunction()');

    const label = document.createElement('label');
    const t = document.createTextNode(input.value);
    label.setAttribute('class', 'completed')
    label.appendChild(t);

    const todo = document.createElement('div');
    todo.appendChild(checkbox);
    todo.appendChild(label);

    // PART 3 - Stores tasks as objects
    const tasks = {};
    tasks[timestamp()] = todo;
    console.log(tasks); // Prints tasks to console for debugging

    todolist.appendChild(todo);
    input.value = ''; //Clear the input field afterwards.
    numberFunction() // Updates the total number of tasks
};

function timestamp() {
    const oldDate = new Date(1970, 1, 1, 0, 0, 0);
    const nowDate = new Date();
    const timeSince1970 = nowDate.getTime() - oldDate.getTime();
    return timeSince1970
}

// Returns number of completed tasks
const checkIfChecked = () => {
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    let number = 0;
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked ? number++ : null;
    }
    return number;
};

// PART 5 - Everytime a task is completed, unchecked or added this function
// updates the number of completed tasks. 
const numberFunction = () => {
    const done = document.getElementById('done');
    const numberOfCheckboxes = document.querySelectorAll("input[type=checkbox]").length;
    done.innerHTML = checkIfChecked() + '/' + numberOfCheckboxes + ' is checked';
};
