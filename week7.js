let student = {
    "name": "Sajid",
    "age" : 24,
    "subjects": ["SSP", "SD", "Webdev"]
};
//Simple JSON object

console.log(student.subjects[0]);
//Stringy is from object -> string
let students2 = JSON.stringify(student);
console.log(students2);
//Parse is from string -> object
let students3 = JSON.parse(students2);
console.log(students3.name);


/*
Create a car object, brand, model and year
covert it to JSON string
parse it back and log the brand
*/

/*

JSON.stringify, used to convert object to string
JSON.parse

*/


let settings = {
    theme: "Dark",
    fontSize: "16px"
};

localStorage.setItem("userSettings",
    JSON.stringify(settings));
let saved = localStorage.getItem("userSettings");
console.log(JSON.parse(saved));


/* 
Saving foods
1.) Create a small form with a input and a button "Save Food"
2. ) On button click 
        -Take input text
        -Save into local storage as JSON array (array of food)
3.) display all the food from the local storage

*/





