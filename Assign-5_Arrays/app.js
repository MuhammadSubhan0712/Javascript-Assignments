// // // -------------------------------------------------------
// // //Task # 01:
// // // Declare an empty array using JS object notation to store
// // // student names in future.
// let student_names = [];


// // // -------------------------------------------------------
// // //Task # 02:
// // // Declare and initialize a strings array.
// let string_array = ['Functions' , 'If-else', 'Arrays' , 'Pointers' , 'Operators'] ;



// // // -------------------------------------------------------
// // //Task # 03:
// // // Declare and initialize a numbers array.
// let number_array = [10 , 209 , 210 , 203 , 12 , 34];


// // // -------------------------------------------------------
// // //Task # 04:
// // // Declare and initialize a boolean array.
// let boolean_array = [3.5 , 39.5 , 2.0 , 20.5 , 21.9 ];




// // // -------------------------------------------------------
// // //Task # 05:
// // // Declare and initialize a mixed array.
// let mixed_array = ['Mixed' , 90 , 4.5 ];

// // // -------------------------------------------------------
// // //Task # 06:
// // // . Declare and Initialize an array and store available mobile
// // // networks in Pakistan.
// const mobile_networks = [' Jazz ' , ' Zong ' , ' Telenor Pakistan ' , '  Ufone ' , ' SCO ' ]  ;


// // // -------------------------------------------------------
// // //Task # 07:
// // // Declare and Initialize an array and store available education
// // // qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// // // M. Phil., PhD). Show the listed qualifications in your browser
// // // like:
// const edu_qualification = ['1)SSC\n', '2)HSC\n', '3)BCS\n', '4)BS\n', '5)BCOM\n','6)MS\n', '7)M. Phil\n', '8)PhD'];
// console.log(edu_qualification);


// // // -------------------------------------------------------
// // //Task # 08:
// // // Declare and initialize an empty array to store top movies of
// // // 2015. Add movies one by one in an array. Display the elements
// // // & length of array in your browser. (Use array’s length method)
// function movie_array(){
// let top_movies = ['1)Avengers: Age of Ultron\n' , '2)Spectre\n' , '3)Jurassic World\n', '4)Inside Out\n'];
// console.log(top_movies.length);
// }



// // // -------------------------------------------------------
// // //Task # 09:
// // // Declare and Initialize an array with your favorite cars. Show
// // // a. First index of the array
// // // b. Car at first index of the array
// // // c. Last index of the array
// // // d. Car at last index of the array
// const cars = [
//     "Corolla",
//     "Civic",
//     "Vitz",
//     "Fit",
//     "Cultus",
//     "DayZ",
//     "Elantra",
//     "Sonata",
//     "Sportage",
//   ];
//   console.log(cars.indexOf[1]);
//   console.log(cars[0]);
//   console.log(cars.lastIndexOf);

// // // -------------------------------------------------------
// // //Task # 10:
// // // Write a program to store 3 student names in an array. Take
// // // another array to store score of these three students. Assume
// // // that total marks are 500 for each student, display the scores &
// // // percentages of students like:
// const names = ['Michael','John','Tony'];
// const marks = [320 , 230 , 480];
// const per = ['Percentage: 64%' , 'Percentage: 46%' , 'Percentage: 96%'];
// const result1 =  'Score of '+names[0] +'is' + names[0].concat(marks[0] , per[0]);
// const result2 =  'Score of '+names[1] +'is' + names[1].concat(marks[1] , per[1]);
// const result3 =  'Score of '+names[2] +'is' + names[2].concat(marks[2] , per[2]);


// // -------------------------------------------------------
// //Task # 11:
// // Initialize an array with color names. Display the array
// // elements in your browser.
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// // Display the updated array in your browser.
// // b. Ask the user what color he/she wants to add to the end &
// // add that color to the end of the array. Display the updated
// // array in your browser.
// // c. Add two more color to the beginning of the array. Display
// // the updated array in your browser.
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// // f. Ask the user at which index he/she wants to add a color &
// // color name. Then add the color to desired position/index.
// // . Display the updated array in your browser.
// // g. Ask the user at which index he/she wants to delete
// // color(s) & how many colors he/she wants to delete. Then
// // remove the same number of color(s) from user-defined
// // position/index. . Display the updated array in your
// // browser.
let colors = ['Red','Green','Black','Blue','Gray','White','Brown'];

const display = document.querySelector('ol');
for (let i = 0 ; i < colors.length ; i++) {
display.innerHTML += `<li> ${colors[i]} </li>`;
console.log(colors[i]);
}

function display_beg(){
let beg = document.querySelector("#beg");
let display1 = document.querySelector("#ol2");
display1 = colors.unshift(beg.value);
for (let i = 0 ; i < colors.length ; i++) 
{
display1.innerHTML += `<li> ${colors[i]} </li>`;
console.log(colors[i]);
}
}



// // // -------------------------------------------------------
// // //Task # 12:
// // // Write a program to store student scores in an array & sort
// // // the array in ascending order using Array’s sort method.

const scores = [91 , 34 , 99, 100 , 31 , 54 , 18 , 98 , 67 , 75 ];
let arrsort = scores.sort(function(a,b) {return a-b});
console.log(arrsort);



// // // -------------------------------------------------------
// // //Task # 13:
// // // Write a program to sort the below mentioned array:
var fruits = ['"strawberry"', '"apple”', '“orange”', '“banana”'];
console.log(fruits.sort());


// // // -------------------------------------------------------
// // //Task # 14:
// // // Write a program to initialize an array with city names. Copy
// // // 3 array elements from cities array to selectedCities array.
let cities = ['"Karachi"' , '"Islamabad"' , '"Quetta"' , '"Peshawar"' , '"Multan"' , '"Lahore"'];
let city = cities.copyWithin(3 , 0 , 3);
console.log(city);

// // // -------------------------------------------------------
// // //Task # 15:
// // // Write a program to create a single string from the below
// // // mentioned array:
// var arr = ['“This ”', '“ is ”', '“ my ”', '“ cat”'];
// // (Use array’s join method)
// let text = arr.join();



// // // -------------------------------------------------------
// // //Task # 16:
// // // Create a new array. Store values one by one in such a way
// // // that you can access the values in the order in which they were
// // // // stored. (FIFO-First In First Out)
// // let fifoArray = [];

// // Function to add a value to the array
// function enqueue(value) {
//     fifoArray.push(value);
// }

// // Function to remove and return the first value from the array
// function dequeue() {
//     return fifoArray.shift();
// }

// // Example usage:
// enqueue("First");
// enqueue("Second");
// enqueue("Third");

// console.log(dequeue()); // Output: "First"
// console.log(dequeue()); // Output: "Second"
// console.log(dequeue()); // Output: "Third"



// // -------------------------------------------------------
// //Task # 17:
// // Create a new array. Store values one by one in such a way
// // that you can access the values in reverse order. (Last In-First
// // Out)
// let lifoArray = [];

// // Function to add a value to the array
// function push(value) {
//     lifoArray.push(value);
// }

// // Function to remove and return the last value from the array
// function pop() {
// //     return lifoArray.pop();
// }

// // Example usage:
// push("First");
// push("Second");
// push("Third");

// console.log(pop()); // Output: "Third"
// console.log(pop()); // Output: "Second"
// console.log(pop()); // Output: "First"


// // -------------------------------------------------------
// //Task # 18:
// //  Write a program to store phone manufacturers (Apple,
// //  Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
// //  the following dropdown/select menu in your browser using
// //  document.write() method:

// //Array of phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//Writing the select dropdown to the document
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


// // -------------------------------------------------------
// //Task # 19:
// // Declare and initialize an empty multidimensional array.
// // (Array of arrays)
// // let multidimensional_array = [[] , []];


// // -------------------------------------------------------
// //Task # 20:
// // Declare and initialize a multidimensional array representing
// // the following matrix:
// // let matrix_array = [[0 , 1 , 2 , 3],[1 , 0 , 1 , 2 ],[2 , 1 , 0 , 1]];
// // console.log(matrix_array);