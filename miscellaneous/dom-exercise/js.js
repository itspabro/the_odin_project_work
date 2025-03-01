const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// a <p> with red text that says "Hey I'm red!"
const para1 = document.createElement("p");
para1.style.color = 'red';
para1.textContent = "Hey I'm red!";
container.appendChild(para1);

// an <h3> with blue text that says "I'm a blue h3!"
const h3 = document.createElement("h3");
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

// a <div> with a black border and pink background with elements inside
const subContainer = document.createElement("div");
subContainer.style.border = "3px solid black";
subContainer.style.backgroundColor = 'pink';

// another <h1> that says "I'm in a div"
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"

// a <p> that says "ME TOO!"
const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

// appending subContainer elements before
subContainer.appendChild(h1);
subContainer.appendChild(para2);
// appending subContainer to container
container.appendChild(subContainer);

// Method 2: move js out of HTML into JS file; can only have one "onclick" property
const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World");

// Method 3: using event listeners
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
	alert("Hello World");
});
// pass event information to the function
btn2.addEventListener("click", function (e) {
	console.log(e.target);
});
btn2.addEventListener("click", function (e) {
	e.target.style.background = 'blue';
});

// Attaching listeners to group of nodes
// create "buttons" node list, which acts like an array
const buttons = document.querySelectorAll("button");
// iterate through each button in node list
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		alert(button.id);
	});
});
