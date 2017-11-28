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

    // Create a label for the checkbox, this is the task to complete
    const label = document.createElement('label');
    const t = document.createTextNode(input.value);
    label.setAttribute('class', 'completed')
    label.appendChild(t);

    // Append the label and the checkbox to an div element called todo
    const todo = document.createElement('div');
    todo.appendChild(checkbox);
    todo.appendChild(label);

    // PART 3 - Stores tasks as objects, use timestamp as key as these are unique
    const tasks = {};
    tasks[timestamp()] = todo;
    console.log(tasks); // Prints tasks to console for debugging

    //Make sure to insert the new todo at the top of the list
    todolist.insertBefore(todo, todolist.childNodes[0]);
    input.value = ''; //Clear the input field afterwards.
    numberFunction() // Updates the total number of tasks
};

// Creates a timestamp to be used as the keys for the todlist
function timestamp() {
    const oldDate = new Date(1970, 1, 1, 0, 0, 0);
    const nowDate = new Date();
    const timeSince1970 = nowDate.getTime() - oldDate.getTime();
    return timeSince1970
}

// Returns number of completed tasks. Very slick
// Use const since functions should be used with inputs
const checkIfChecked = () => {
    var count = 0;
    const checkbox = document.querySelectorAll("input[type=checkbox]");
    // Inline for-loop. v.checked is a boolean expression: True or False.
    // ? is a if sentence (ternary expression) If v.checked increase count else null
    checkbox.forEach(v => v.checked ? count++ : null);
    return count
}

// A more sane way to return number of completed tasks. Uncomment to use

// function checkIfChecked () {
//     const checkbox = document.querySelectorAll("input[type=checkbox]");
//     let number = 0;
//     for (let i = 0; i < checkbox.length; i++) {
//         if (checkbox[i].checked) {
//             number++;
//         }
//     }
//     return number;
// };

// PART 5 - Everytime a task is completed, unchecked or added this function
// updates the number of completed tasks. 
const numberFunction = () => {
    const done = document.getElementById('done');
    const numberOfCheckboxes = document.querySelectorAll("input[type=checkbox]").length;
    done.innerHTML = checkIfChecked() + '/' + numberOfCheckboxes + ' is checked';
};
