"use strict";
let age = 22;
let height = 1.677;
let weight = 50;
let BMI = weight / (height * height);
console.log("BMI  : ", BMI);
let userName = "Zizio";
const password = "password";
const email = "email@email.com";
let phone;
phone = "+251 944442264";
let me = `Name : ${userName} \nPassword : ${password} \nE-mail: ${email} \nPhone : ${phone}\n`;
console.log(me);
const isLoggin = false;
const isPermitted = true;
const isValid = false;
console.log("Logged In : ", isLoggin, "Is Permitted :", isPermitted, "isValid : ", isValid);
let anything = "email@email.com";
console.log("Anything Have : ", anything);
anything = 123;
console.log("Anything Have : ", anything);
anything = false;
console.log("Anything Have : ", anything);
let unknownValue = "email@email";
if (typeof unknownValue === "string") {
    console.log("Unknown Is String And Have Value : ", unknownValue);
}
unknownValue = 32;
if (typeof unknownValue === "number") {
    console.log("Unknown Is Number And Have Value : ", unknownValue);
}
unknownValue = true;
if (typeof unknownValue === "boolean") {
    console.log("Unknown Is Boolean And Have Value : ", unknownValue);
}
let empty = null;
console.log("Null : ", empty);
let user = null;
console.log("Null : ", user);
function sayHello(username) {
    console.log("Hello : ", username);
}
console.log("I Am Function Return Value : ", sayHello("Nuredin Bedru"));
let userInfo = {
    userName: "Nuredin Bedru",
    email: "nure@gmail.com",
};
console.log("Undefine For non Existing Field Accessing : ", userInfo.password);
let productID = 12;
productID = "Some String Value Also Possible";
console.log("Product ID : ", productID);
let statusValue;
statusValue = "pending";
console.log("This is Literal Union Type : ", statusValue);
