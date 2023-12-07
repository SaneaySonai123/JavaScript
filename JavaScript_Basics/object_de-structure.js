//Object Constructor

const person = {
    name: "Saneay",
    loacation: "bbsr",
    "fullname": "Saneay Behera"

};

console.log(person);
// console.log(person.name);
// console.log(person["fullname"]);

const user = {}

user.userid = "7865";
user.userName = "Web_Bocket";
user.isLoggedIn = "true";

console.log(user.userid);
console.log(user);

user.userid = 6574;
console.log(user.userid);
console.log(user);

Object.freeze(user);
user.userName = "Bocket_Lamp";
console.log(user);


const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            fname: "Web",
            lname: "Bocket"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userFullName.fname);

//Objects in Array

const data = [{
    userId: 345,
    userLocation: "BBSR"
},
{
    userId: 346,
    userLocation: "Cuttact"
},
{
    userId: 347,
    userLocation: "Jagatsinghpur"
},
{
    userId: 348,
    userLocation: "Puri"
}
];
console.log(data);
console.log(data[2]);

console.log(Object.entries(regularUser));
console.log(Object.entries(person));

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(user.hasOwnProperty('isLoggedIn'));

//Object de-structure

const course = {
    courseName : "JavaScript",
    courseFee : 4000,
    institute : "Web_Bocket"
};

console.log(course.courseName);
const {courseName : cn} = course;
console.log(cn);
console.log(cn);
const {courseFee : cf} = course;
console.log(cf);