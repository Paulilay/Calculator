// Get the input element with the ID 'inputBox'
let input = document.getElementById('inputBox');

// Get all button elements and convert the NodeList to an array
let buttons = document.querySelectorAll('button');

// Initialize an empty string to store the input expression
let string = "";

// Convert the NodeList of buttons to an array
let arr = Array.from(buttons);

// Add click event listeners to each button
arr.forEach(button => {
	// Event listener function for button click
	button.addEventListener('click', (e) => {
		// Check if the clicked button is '='
		if (e.target.innerHTML == '=') {
			// Evaluate the expression and update the input value
			string = eval(string);
			input.value = string;
		}
		// Check if the clicked button is 'AC' (All Clear)
		else if (e.target.innerHTML == 'AC') {
			// Clear the input string and update the input value
			string = "";
			input.value = string;
		}
		// Check if the clicked button is 'DE' (Delete)
		else if (e.target.innerHTML == 'DE') {
			// Remove the last character from the input string and update the input value
			string = string.substring(0, string.length - 1);
			input.value = string;
		}
		// For other buttons, append the button's text to the input string and update the input value
		else {
			string += e.target.innerHTML;
			input.value = string;
		}
	})
})