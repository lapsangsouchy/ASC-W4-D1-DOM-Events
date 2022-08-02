// Events!!

// Select Button
let buttonRef = document.querySelector('button');

// console.dir(buttonRef);

// Select Div
let divRef = document.querySelector('div');

// Declare background-color in Javascript (Initial State)
divRef.style.backgroundColor = 'orange';

// Declare display in Javascript (Initial State)
divRef.style.display = 'block';

// console.dir(divRef);

// OPTION 1: Create Callback function and

// Create Callback Function
function onClick() {
  //Example of manipulating Button Tag

  // buttonRef.style.backgroundColor = 'pink';
  // buttonRef.innerHTML = 'OW!';

  //Conditionals to check div's Color State
  if (divRef.style.backgroundColor == 'orange') {
    //Change background and inner HTML
    divRef.style.backgroundColor = 'aqua';
    divRef.innerHTML = 'Squirtle Squirtle!';
  } else {
    //Change background and inner HTML
    divRef.style.backgroundColor = 'orange';
    divRef.innerHTML = 'CHARMADER CHARRRR!';
  }
}

// Add Event Listener
buttonRef.addEventListener('click', onClick);

// OPTION 2: Change Value of onclick in DOM

buttonRef.onclick = function () {
  if (divRef.style.display == 'block') {
    divRef.style.display = 'none';
  } else {
    divRef.style.display = 'block';
  }
};
