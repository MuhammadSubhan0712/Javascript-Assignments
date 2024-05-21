// // ----------------------------------------------------------------------
// // Task # 01
// // 1. Declare a variable called age & assign to it your age.
// // Show your age in an alert box.
alert('Javascript alert');
var age = "I am 21 years old";
alert(age);

// // ----------------------------------------------------------------------
// // Task # 02
// // 2. Declare & initialize a variable to keep track of how many
// // times a visitor has visited a web page. Show his/her
// // number of visits on your web page. For example: “You
// // have visited this site N times”.
alert('Javascript alert');
var visit = prompt("How many times you visited the website");
alert('You have visited this webiste ' + visit +' times');

// ----------------------------------------------------------------------
// Task # 03
// 3. Declare a variable called birthYear & assign to it your
// // birth year. Show the following message in your browser:
alert('Javascript alert');
var birthYear = +prompt("Please enter your Birthyear");
document.write = ('Your birthyear is ',birthYear);

// ----------------------------------------------------------------------
// Task # 04
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var Visitors_name = prompt("Enter your Name Please!: ");
var Quantity = +prompt("How many products in our store you've ordered:");
var Product_title = prompt("Please Enter the Product name: ");
document.write(Visitors_name +' ordered ' + Quantity + '  ' + Product_title + ' on XYZ Clothing Store');