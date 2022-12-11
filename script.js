function display(){
    "use strict";
    let firstName  = document.getElementById('firstName').value;
	let lastName  = document.getElementById('lastName').value;
	let fullName = firstName +" " +  lastName;
	
	if (!firstName || !lastName){ // checks if no (not) firstName
		document.getElementById('fullName').innerHTML = "Enter both your first and last names! &#x1F61E";
	} else {
		document.getElementById('fullName').innerHTML = "Hello there " + "<span>" + fullName + "</span> &#x1F602";
	}
	
	
}

// Click event listener attached to button on DOM with id 'myButton'
document.getElementById('myButton').addEventListener("click", display);
