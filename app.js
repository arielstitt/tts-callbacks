// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2){
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5, 5);

// //calling myDisplayer
// myDisplayer(result);

//EXAMPLE #2

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2){
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }

// myCalculator(5, 5);

// EXAMPLE #3

// function myDisplayer(some){
//     document.getElementById("demo").innerHTML = some;
// }


// function myCalculator(num1, num2, myCallback){
//     let sum = num1 + num2;
//     myCallback(sum);  
// }

// myCalculator(5, 5, myDisplayer);

// SYNCHRONOUS

// let numbers = [1, 2, 4, 7, 3, 5, 6];

// numbers.sort((a, b)=> a - b);

// console.log(numbers);

// Asynchronous

// console.log('1');

// setTimeout(function afterTwoSeconds(){
//     console.log('2');
// }, 2000);

// setTimeout(afterTwoSeconds, 2000);

// function afterTwoSeconds(){
//     console.log('2');
// }

// console.log('3');

// setInterval(myFunction, 1000);
// //define the callback below
// function myFunction(){
//     let d = new Date(); //new instance of the date object

//     //change the inner html of the div with the id of "demo"
//     document.getElementById("demo").innerHTML = 
//     //get the hours, minutes, and seconds
//     d.getHours() + ":" +
//     d.getMinutes() + ":" +
//     d.getSeconds();
// }


// AJAX CALL

function ajaxCall() {
    let ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == XMLHttpRequest.DONE) {
            if (ajaxRequest.status == 200) {
                let myDiv = document.getElementById('main');
                let newDiv = document.createElement('div');
                newDiv.innerHTML = ajaxRequest.responseText;
                myDiv.appendChild(newDiv);
                console.log(ajaxRequest.status);
            } else if (ajaxRequest.status == 400) {
                console.log("there was an error 400");
            } else {
                console.log("something other than 200 was returned")
            }
        }
    }
    ajaxRequest.open("GET", "http://jsonplaceholder.typicode.com/users", true);
    ajaxRequest.send();
}

function clearMain() {
    document.getElementById('main').innerHTML = "";
}