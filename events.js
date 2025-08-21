document.getElementById("myInput")
.addEventListener('keyup', 
    function () {
    document.getElementById("output")
    .innerHTML = this.value;
});




//  this refers to the element that receives the event
//In this case, its the input
//Therefore, when the event is triggered by the input, the output paragraph's value
//is changed to the input's value


document.getElementById("box")
.addEventListener('mouseover', function(){
    this.style.background = "green";
});

document.getElementById("box")
.addEventListener('mouseout', function(){
    this.style.background = "blue";
});

// That makes it zoom in and out when hovered
//and go back to normal when mouse out

document.getElementById("text")
.addEventListener("dblclick", function() {
    this.style.color = "red";
    this.style.backgroundColor = "blue";
})

//use the DB Click on a paragraph called Like
// Show the heart emoji


document.getElementById("email")
.addEventListener("focus", function(){
    this.style.border = "2px solid blue";
    // Make the user know which input is 
    //Priority 
});

document.getElementById("email")
.addEventListener("blur", function(){
    this.style.border = "4px solid gray";
    //Can be used to say input is optional 
    //or that it needs to be filled
});

