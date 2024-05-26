//storing a person name in a varibale
var personName = "Salman Sarwar";
// Printing the person's name in lowercase
console.log("lowercase:", personName.toLowerCase());
// Printing the person's name in uppercase
console.log("uppercase:", personName.toUpperCase());
// Function to convert a string to title case
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join(' ');
}
