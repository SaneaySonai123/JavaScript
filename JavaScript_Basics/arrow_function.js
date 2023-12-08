// Arrow function - In ES6 major update had done. It changes the old syntax of function declaration and tried to reduce the length of a code.
// In arrow function we need a variable to declare it and majorly used  => this operator to define arrow function.

//old syntax of a function

// function addTwoNos (num1,num2){
//     return num1 + num2;
// }

// console.log(addTwoNos(5,5));

//Arrow function 

// const user = {
//     userName : "Saneay",
//     location : "bbsr",
//     welcomeMessage : function (){
//         console.log(`${this.userName}, Good Morning`);
//         console.log(this);
//     }
// }

// // console.log(user);

// user.welcomeMessage();
// console.log(user.welcomeMessage);
// // user.userName = "San";
// // user.welcomeMessage(); 


// const person = {
//     name : "abc",
//     age : 20,
//     loginDays : ["Sunday","monday","tuesday","wednesday"],
//     username :{
//         userDetails :{
//             lname : "XYZ",
//             fname : "abc"
//         }
//     }
// };
// console.log(person.username.userDetails.fname);
// console.log(person);


const userDetails = () => {
    let username = "Web_Bocket"
    console.log(username);
}

userDetails();

const addTwoNos = (num1,num2) =>{
    return num1 + num2;
}

const addNos = (num1,num2) => num1+num2; //If there is only one line code then we can remove the function body means ({}) curly braces.

console.log(addTwoNos(5,9));
console.log(addNos(8,8));

const addTwo = () => ({username : "Web_Bocket"})
console.log(addTwo());


