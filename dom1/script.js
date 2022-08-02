// Dom Manipulation

// Select and change first heading
let heading = document.querySelector('h1');

// console.log(heading);
// console.dir(heading);

heading.style.backgroundColor = 'yellow';

// Select and change second heading
let heading2 = document.getElementById('two');

heading2.style.backgroundColor = 'green';

// Select all headings

// Option 1: querySelectorAll with h1

let headings = document.querySelectorAll('h1');

// Option 2: querySelectorAll with .test (class name selection)

let headings = document.querySelectorAll('.title');

// Option 3: getElementsByClassName

let headings = document.getElementsByClassName('title');

// console.dir(headings);

// Loop through the new array of headings

for (let i = 0; i < headings.length; i++) {
  // Change each item to backgroundColor of purple
  headings[i].style.backgroundColor = 'purple';
}

// // Manipulate Blah h2
let blah = document.querySelector('#blah');
// OR
let blah = document.querySelector('h2');
// OR
let blah = document.getElementById('blah');

// console.dir(blah);

// Concatenate new string to existing text

blah.innerHTML += 'blah blah blah';

// Change the innerText altogether!

blah.innerHTML = 'blah blah blah';

// Loop through headings array and assign each innerHTML and backgroundColor to random color

// Color Array
let colorsArr = ['pink', 'purple', 'gold', 'indigo', 'teal', 'aqua'];

for (let i = 0; i < headings.length; i++) {
  // Rand Int Generator (parseInt is like Math.floor)
  let randInt = parseInt(Math.random() * colorsArr.length);
  //Create random color and store as variable
  let randColor = colorsArr[randInt];

  //Assign random backgroundColor
  headings[i].style.backgroundColor = randColor;
  //Assign same random color as text
  headings[i].innerHTML = randColor;
}
