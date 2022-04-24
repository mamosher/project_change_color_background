const button = document.querySelector("button");
const body = document.querySelector("body"); 
const colors = ["blue", "black", "yellow", "green", "red", "pink", "blue"]; 

body.style.backgroundColor = "fuscia";
button.addEventListener("click", function(changeBackground){
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
})