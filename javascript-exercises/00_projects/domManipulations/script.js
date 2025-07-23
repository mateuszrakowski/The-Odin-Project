const container = document.querySelector("#container");
const body = document.querySelector("body");

// 
const content_p = document.createElement("p");

content_p.textContent = "Hey I'm red";
content_p.style.color = "red";
container.appendChild(content_p);

// 
const content_h3 = document.createElement("h3");

content_h3.textContent = "Hey, I'm a blue h3!";
content_h3.style.color = "blue";
container.appendChild(content_h3);

// 
const content_div = document.createElement("div");

content_div.style.border = "1px solid black";
content_div.style.backgroundColor = "pink";

// 
const div_content_h1 = document.createElement("h1");

div_content_h1.textContent = "I'm in a div";

// 
const div_content_p = document.createElement("p");

div_content_p.textContent = "ME TOO!";

// 
content_div.appendChild(div_content_h1);
content_div.appendChild(div_content_p);
body.appendChild(content_div);

// Buttons
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
