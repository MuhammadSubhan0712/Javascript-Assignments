// --------------------------------------------------------
// Task # 01:
// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
var num = prompt("Enter your number");
if (num % 3 == 0) {
  console.log(num + " is divisible by 3");
} else {
  console.log(num + " is not divisible by 3");
}

// --------------------------------------------------------
// Task # 02:
// 2. Write a program that checks whether the given input is an even
// number or an odd number.
var num = prompt("Enter your number");
if (num % 2 == 0) {
  console.log(num + " is even number");
} else {
  console.log(num + " is odd number");
}

// --------------------------------------------------------
// Task # 03:
// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
var age = prompt("Enter your age");
if (age > 18) {
  console.log(age + ' "is Old enough"');
} else {
  console.log(age + ' "is Too young"');
}

// --------------------------------------------------------
// Task # 04:
// 4. Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output..
var names = +prompt("Enter your good name");
if (names == "Subhan") {
  console.log("!Coincidence! Welcome " + names + " to our site");
} else {
}

// --------------------------------------------------------
// Task # 05:
// 5. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.
var num = prompt("Enter your number");
switch (num) {
  case num % 3 === 0:
    Text = "Given number is divisible by 3";
    break;
  case num % 3 === 1:
    Text = "Given number is not divisible by 3";
    break;
  default:
    Text = "Wrong input";
    break;
}

// --------------------------------------------------------
// Task # 06:
// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)
var char = +prompt("Enter any character to check!");

if (!isNaN(parseInt(char))) {
  console.log("Given character is a number");
} else if (char >= "A" && char <= "Z") {
  console.log("Given character is a uppercase word");
} else if (char >= "a" && char <= "z") {
  console.log("Given character is a lowercase word");
} else {
  console.log("!!Wrong instruction!!");
}

// --------------------------------------------------------
// Task # 07:
// 7. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)
var num1 = prompt("Enter your number 1");
var num2 = prompt("Enter your number 2");
var operator = prompt(
  "!Now which operation you want to perform \n Press 1 for + \n Press 2 for - \n Press 3 for * \n Press 4 for \n Press 5 for %\n"
);
switch (operator) {
  case 1: {
    var num3 = num1 + num2;
    console.log("Addition of your two numbers is = " + num3);
    break;
  }
  case 2: {
    var num3 = num1 - num2;
    console.log("Subtraction of your two numbers is = " + num3);
    break;
  }
  case 3: {
    var num3 = num1 * num2;
    console.log("Multiplication of your two numbers is = " + num3);
    break;
  }
  case 4: {
    var num3 = num1 / num2;
    console.log("Division of your two numbers is = " + num3);
    break;
  }
  case 5: {
    var num3 = num1 % num2;
    console.log("Modulud of your two numbers is = " + num3);
    break;
  }
  default: {
    console.log("Wrong input");
    break;
  }
}

// --------------------------------------------------------
// Task # 08:
// 8. Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements



// --------------------------------------------------------
// Task # 09:
// 9. Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.
var year = prompt("Enter the year in YYYY format!");
if (
  year === 1880 ||
  year === 1884 ||
  year === 1888 ||
  year === 1892 ||
  year === 1896 ||
  year === 1900 ||
  year === 1904 ||
  year === 1908 ||
  year === 1912 ||
  year === 1916 ||
  year === 1920 ||
  year === 1924
) {
  console.log("Entered year is a Prior Leap year");
} else if (
  year === 1928 ||
  year === 1932 ||
  year === 1936 ||
  year === 1940 ||
  year === 1944 ||
  year === 1948 ||
  year === 1952 ||
  year === 1956 ||
  year === 1960 ||
  year === 1964 ||
  year === 1968 ||
  year === 1972
) {
  console.log("Entered year is a Prior Leap year");
} else if (
  year === 1928 ||
  year === 1932 ||
  year === 1936 ||
  year === 1940 ||
  year === 1944 ||
  year === 1948 ||
  year === 1952 ||
  year === 1956 ||
  year === 1960 ||
  year === 1964 ||
  year === 1968 ||
  year === 1972 ||
  year === 1976 ||
  year === 1980 ||
  year === 1984 ||
  year === 1988 ||
  year === 1992 ||
  year === 1996 ||
  year === 2000 ||
  year === 2004 ||
  year === 2008 ||
  year === 2012 ||
  year === 2016 ||
  year === 2020
) {
  console.log("Entered year is a Prior Leap year");
} else {
  console.log("Entered year is not a leap year");
}

// --------------------------------------------------------
// Task # 10:
// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.
var password = +prompt("!Enter your password!");
if (password === "  ") {
  alert("!!PLease Enter the password");
} else {
  var repass = +prompt("!Retype your password to confirm");
  if (repass === password) {
    console.log(
      "Correct! The password you entered matches the original password"
    );
  } else {
    console.log("!!Incorrect password!!");
  }
}

// --------------------------------------------------------
// Task # 11:
// 11. Write a program that adds an else statement to the following
// script to display “You are not Fahad”
var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("You are not Fahad!");
}

// --------------------------------------------------------
// Task # 12:
// 12. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// --------------------------------------------------------
// Task # 13:
// 13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var int1 = prompt("Enter your first integer");
var int2 = prompt("Enter your second integer");
if (int1 > int2) {
  console.log(int1 + " is the larger ");
} else if (int1 === int2) {
  console.log(int1 + int2 + " Both are equal ");
} else {
  console.log(int2 + " is the larger ");
}

// --------------------------------------------------------
// Task # 14:
// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.
var number = prompt("Enter any number");
if (number === 0) {
  console.log(number + " is the zero ");
} else if (number < 0) {
  console.log(number + " is the negative ");
} else if (number > 0) {
  console.log(number + " is the positive ");
} else {
  console.log("Wrong input");
}

// // --------------------------------------------------------
// // Task # 15:
// 15. Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)
var hour = +prompt("Enter the current hour");
if (hour > 5 && hour < 10) {
  console.log(' "Breakfast is served." ');
} else if (hour > 10 && hour < 2) {
  console.log(' "Time for lunch." ');
} else if (hour > 4 && hour < 9) {
  console.log(' "It is a dinner time." ');
} else {
  console.log('  "Sorry, you will have to wait, or go get a snack." ');
}

// // --------------------------------------------------------
// // Task # 16:
// 16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”
var myvariable = +prompt("Enter any variable to check type");
if (typeof myvariable === "number") {
  console.log(myvariable + " is a number");
} else if (typeof myvariable === "string") {
  console.log(myvariable + " is a string");
} else if (typeof myvariable === "Boolean") {
  console.log(myvariable + " is a Boolean");
} else if (typeof myvariable === "Undefined") {
  console.log(myvariable + " is Undefined");
} else {
  console.log("Others");
}

// // --------------------------------------------------------
// // Task # 17:
// 17. Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.
var mychar = +prompt("Enter any character to check ");
if (mychar === "a, e, i , o, u" || "A, E, I, O, U") {
  console.log(true);
} else {
  console.log(false);
}

// // --------------------------------------------------------
// // Task # 18:
// 18. Choose the correct comparison operator to display "true",
// when: 10 is NOT equal to 8.
var num = 10 != 8;
console.log(num);

// // --------------------------------------------------------
// // Task # 19:
// 19. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:
var monthNumber =  prompt('Enter any month number');
switch (monthNumber) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month number";
}
console.log('The name of month is '+monthName);

// // --------------------------------------------------------
// // Task # 20:
// 20. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".
var age = prompt("Enter the age");
if (age < 18) {
  console(' "Too young" ');
} else {
  console.log("Old Enough");
}
