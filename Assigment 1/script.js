
// Answer Number 01
// let num1 = +prompt("Enter First Number: ");
// let num2 = +prompt("Enter Second Number: ");
// if(num1>num2){
//     console.log("Larger number is: "+num1);
// }
// else{
//     console.log("Larger number is: "+num2);
// }

// ---------------------------------------------------------------

// Answer number 2
// let num = +prompt("Enter a positive or negative number: ");
// if(num > 0) {
//     alert("Sign is + (Positive)");
// }
// else{
//     alert("Sign is - (negative)");
// }

// ----------------------------------------------------------------------




// Answer number 03


// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
// let num3 = prompt("Enter a number");
// let num4 = prompt("Enter a number");
// let num5 = prompt("Enter a number");

// if (num1>num2 && num1>num3 && num1>num4 && num1>num5)
// {
//     console.log("Greatest number is " +num1);
// }
// else if (num2>num1 && num2>num3 && num2>num4 && num2>num5)
// {
//     console.log("Greatest number is " +num2);
// }
// else if (num3>num1 && num3>num2 && num3>num4 && num3>num5)
// {
//     console.log("Greatest number is " +num3);
// }
// else if (num4>num1 && num4>num2 && num4>num3 && num1>num4)
// {
//     console.log("Greatest number is " +num4);
// }
// else
// {
//     console.log("Greatest number is " +num5);
// }


// --------------------------------------------------------------------

// Answer Number 4

// for(let i = 0; i<=15; i++){
//     if (i%2 == 0){
//         console.log(i+" is even")
//     }
//     else{
//         console.log(i+ " is odd")
//     }
// }



// =------------------------------------------------------------------


// Answer number 5


// let marks = +prompt("Enter Average marks of student: ");

// if (marks <= 60){ console.log ("Grade is 'F'");}
// else if (marks <= 60){ console.log ("Grade is 'F'")}
// else if (marks <= 70){ console.log ("Grade is 'D'")}
// else if (marks <= 80){ console.log ("Grade is 'C'")}
// else if (marks <= 90){ console.log ("Grade is 'B'")}
// else if (marks <= 100){ console.log ("Grade is 'A'")}



// -------------------------------------------------------------------
// Answer number 6



// for(let i = 1; i <= 100; i++){
//     if(i%3==0 && i%5 == 0){
//         console.log("FizzBuzz")
//     }
//     else if (i%3 == 0){
//         console.log("Fizz")
//     }
//     else if (i%5 == 0){
//         console.log('Buzz')
//     }
//     else (console.log(i))
// }


// -------------------------------------------------------------------


// Answer number 7
let steric = ""
for(let i = 1; i<=5; i++){
    for(let j = i; j<=5; j++){
        steric=steric+"*"
    }
    console.log(steric);
    steric="";
}