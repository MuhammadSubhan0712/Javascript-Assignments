// let firstname = prompt("Enter your firstname");
// let lastname = prompt("Enter your lastname");
// let fullname = firstname.concat(" " , lastname);
// console.log(fullname);

// ---------------------------------------------------------------------------

// let favorite = prompt("Share us! Which phone do you like?");
// let len =  favorite.length;
// console.log("The length of string is",len);

// ---------------------------------------------------------------------------



// let h =  '"Proud to be Pakistani"' ;
// document.write(h);
// document.write("  :  ");
// document.write("Index number of 'n' is ", h.indexOf('n'));

// ---------------------------------------------------------------------------

// let last = '"Hello World"';
// document.write(last);
// document.write("  :  ");
// document.write("last index of letter l is " , last.lastIndexOf('l'));

// ---------------------------------------------------------------------------


// let word = '"Pakistani.."';
// document.write("String : ",word);
// document.write("Character at index no 3 is : ",word[3]);

// ---------------------------------------------------------------------------


// let word = '"Hyderabad.."';
// document.write("City : ",word);
// document.write("After replacement word is : ", word.replace("Hyder","Islam"));

// ---------------------------------------------------------------------------


// var message = " Ali and Sami are best friends. They play cricket and football together.";
// document.write("Actual Message: " , message , "<br>");
//  document.write("After Replacement Message:" , message.replaceAll("and" , "&"));

// ---------------------------------------------------------------------------


// let str =  "420";
// document.write("Value: " , str , "<br> Type:  " , typeof str );
// let num  = Number(str);
// document.write("<br> Value: ", num , "<br> Type: " , typeof num );


// ---------------------------------------------------------------------------

// let url = prompt("Enter a URL (in the format www.example.com):");

// let domain = extDomain(url);

// document.write("Domain Name: " + domain);

// function extDomain(url) {

//     url = url.replace(/^www\./, "");

//     var domain = url.split("/")[0];

//     return domain;
// }


// ---------------------------------------------------------------------------

// let inp = prompt("Enter your favorite dry fruit");
// console.log("User Input: " , inp);
// console.log("In Upper Case: ",inp.toUpperCase());
// ---------------------------------------------------------------------------



// let inp = prompt("Enter the Network which you use or like");
// console.log("User Input: " , inp);
// console.log("In Lower Case: ",inp.toLowerCase());

// ---------------------------------------------------------------------------


// function toTitleCase(str) {
//     return str.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
//       return firstLetter.toUpperCase();
//     });
//   }


// ---------------------------------------------------------------------------

// let inp = prompt("Enter your favorite programming language");
// document.write("User Input: " , inp);
// document.write("<br>In Title Case: ", toTitleCase(inp));

// ---------------------------------------------------------------------------


// const num = 35.36;
// document.write("Number: ", num);
// document.write("<br>Result: " , num.toString().replace(".",""));

// ---------------------------------------------------------------------------


// let a = 3;
// let b = 3;
// document.write("a = 3 <br> b = 3");
// let x = a + b ;
// document.write("<br> a + b = " , x);


// ---------------------------------------------------------------------------


// let a = 3;
// let b = 3;
// document.write("a = 3 <br> b = 3");
// let x = a - b ;
// document.write("<br> a - b = " , x);


// ---------------------------------------------------------------------------

// function Special(symbol) {
//     var char = symbol.charCodeAt(0);
//     return (char === 33 || char === 44 || char === 46 || char === 64);
// }
// function validate(username) {
//     for (var i = 0; i < username.length; i++) {
//         if (Special(username[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// alert("Enter a valid username without special characters (@ . , !).");
// var username = prompt("Enter your name:");
// while (!validate(username)) {
//     alert("Please enter a valid username without special characters (@ . , !).");
//     username = prompt("Enter your username:");
// }

// document.write("Valid username: " ,"<em>" , username);

// ---------------------------------------------------------------------------



// let refreshment = ["cake", "apple pie", "cookie", "chips", "patties"];
// let order = prompt("Welcome to our bakery\nWhat do you like to buy");

// function check(array , search) {

//     // To convert input type to lower case
// let searchL = search.toLowerCase();

//     for (let i = 0; i < array.length; i++) {

//     // To convert array values to lower case

// let arrayL = array[i].toLowerCase();

//         if (arrayL === searchL) {
//             return i;
//         }

//     }
//      return -1;

// }

// let index = check(refreshment , order);
// if (index !== -1) {
//     document.write(order , " is available :) in our bakery at index number " , index);
// }

// else{
//     document.write("We really sorry :| " , order , " is not available"," in our bakery!! ");

// }

// ---------------------------------------------------------------------------


// let string1 =  prompt("Enter your First String please");
// let string2 = prompt("Enter your Second String please");

// var stringA = string1.length;
// var stringB = string2.length;

// if (stringA > stringB) {
//     document.write(string1 , " is greater than " , string2);
// }
// else if (stringA === stringB){
//     document.write(string1 , " & " ,  string2 ," Both are equal ");
// }
// else if(stringB > stringA){
//     document.write(string2 , " is greater than " , string1);
// }


// ---------------------------------------------------------------------------

//dada password wala karna ha


// function validatePassword(password) {

//     if (password.length < 6) {
//         return false;
//     }

//     if (!isNaN(parseInt(password[0]))) {
//         return false;
//     }

//     var Alphabet = false;
//     var Number = false;

//     for (var i = 0; i < password.length; i++) {
//         if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
//             Alphabet = true;
//         } else if (!isNaN(parseInt(password[i]))) {
//             Number = true;
//         }
//     }

//     return Alphabet && Number;
// }

// // Prompt the user to enter a password
// var password = prompt("Enter your password:");

// // Validate the password
// while (!validatePassword(password)) {
//     // If the password does not meet the requirements, prompt the user to enter a valid password
//     password = prompt("Invalid password! Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");
// }

// // If the password meets the requirements, display a success message
// alert("Password successfully set!");

// ---------------------------------------------------------------------------

// let place = prompt("Enter the name of your University: ");
// var splits = place.split("  ");
// document.write("<br>" , splits);
// console.log("\n" , splits);


// ---------------------------------------------------------------------------


// let char = prompt("Enter any string to take it's last character");

// if (char !== null && char !== "") {
//     var last = char.charAt(char.length -1);

// document.write("The Last Character of your input is : " , last);
// console.log("The Last Character of your input is : " , last);;
// }
// else{
//     document.write(char , " This is Invalid Input");
//     console.log(char , " This is Invalid Input");
// }

// ---------------------------------------------------------------------------


// let sentence = prompt("Enter the sentence of one or more lines ");
// let occur = prompt("Now which word you want to check it's occurence in this sentence");
// var count = 0;

// var words = sentence.split(" ");
// for (let i = 0; i < words.length ; i++) {
//     if (words[i].toLowerCase() === occur.toLowerCase()) {
//         count++;
//     }
// }
// document.write(`No of Occurences of word <b> "${occur}"  is :  "${count}" <br> in the sentence "${sentence}" `);


// ---------------------------------------------------------------------------



// let stringA = prompt("Enter any string to check vowels and consonants: ");
// var vow = 0;
// var conso = 0;

// for (let i = 0; i < stringA.length; i++) {

// if (stringA !== null && stringA !== "") {
//   if (
//     stringA[i] === "a" ||
//     stringA[i] === "e" ||
//     stringA[i] === "i" ||
//     stringA[i] === "o" ||
//     stringA[i] === "u" ||
//     stringA[i] === "A" ||
//     stringA[i] === "E" ||
//     stringA[i] === "I" ||
//     stringA[i] === "O" ||
//     stringA[i] === "U"
//   ) {
//     vow++;
//   } else 
//   {
//     conso++;
//   }
// }
// else{
//     document.write(char , " This is Invalid Input");
//     console.log(char , " This is Invalid Input");
// }
// }
// document.write(
//   `In the given string = "${stringA}" <br>Total Vowels are = "${vow}" and consonants are = "${conso}"`
// )
// console.log(
//     `In the given string = "${stringA}" <br>Total Vowels are = "${vow}" and consonants are = "${conso}"`
//   )
// ;
