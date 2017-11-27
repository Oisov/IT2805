/* Part 2 */
console.log('PART 2')
for (var i = 0; i < 21; i++) {
    console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const divisors = {
    eple: 3,
    kake: 5
};
// Iterates through all nums in the array "numbers".
// REQUIRES ECMASCRIPT 2015+
for (let num of numbers) {
    var str = ""
    // Iterates through all divisor names
    // REQUIRES ECMASCRIPT 2015+
    for (let name in divisors) {
        // Extracts the key from the dictionary, which is int
        if (num % divisors[name] === 0) {
            str = str.concat(name)
        }
    }
    // If any names got appended to the string, print string.
    if (str.length > 0) {
        console.log(str)
        // Otherwise print current number in the array.
    } else {
        console.log(num)
    }
}

/* Part 4 */

document.getElementById("title").innerText = "Hello, JavaScript";

/* Part 5 */
function changeDisplay() {
    document.getElementById("magic").style.display = "none";
}

function changeVisibility() {
    document.getElementById("magic").style.visibility = "hidden";
    document.getElementById("magic").style.display = "block";
}

function reset() {
    document.getElementById("magic").style.display = "block";
    document.getElementById("magic").style.visibility = "visible";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

// Create a variable for the un ordered list tech
var list = document.getElementById('tech');

// Loop through the list of technologies
for (let techn of technologies) {
    // For every element create a list element
    var entry = document.createElement('li');
    // For every list element add the text from technologies to that list
    entry.appendChild(document.createTextNode(techn));
    // Add the list element back into the list variable
    list.appendChild(entry);
}
