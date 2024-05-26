//storing a person name in a varibale
let personName: string = "Salman Sarwar";

// Printing the person's name in lowercase
console.log("lowercase:", personName.toLowerCase());

// Printing the person's name in uppercase
console.log("uppercase:", personName.toUpperCase());

// Function to convert a string to title case
function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}