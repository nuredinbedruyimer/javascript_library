//  number = integer | float | double

let age: number = 22;
let height: number = 1.677;
let weight: number = 50;
let BMI: number = weight / (height * height);

console.log("BMI  : ", BMI);

//  string = char | array of char

let userName: string = "Zizio";

const password: string = "password";
const email: string = "email@email.com";
let phone: string;
phone = "+251 944442264";

let me: string = `Name : ${userName} \nPassword : ${password} \nE-mail: ${email} \nPhone : ${phone}\n`;
console.log(me);

//  Boolean =  either True or False

const isLoggin = false;
const isPermitted = true;
const isValid = false;
console.log(
  "Logged In : ",
  isLoggin,
  "Is Permitted :",
  isPermitted,
  "isValid : ",
  isValid
);

// any = any type

let anything: any = "email@email.com";
console.log("Anything Have : ", anything);

anything = 123;
console.log("Anything Have : ", anything);

anything = false;

console.log("Anything Have : ", anything);

//  Unknown  = any + typechecking

let unknownValue: unknown = "email@email";

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

//  null and undefine

//  null --> intential empty value

let empty: null = null;

console.log("Null : ", empty);
let user = null;

console.log("Null : ", user);

//  undefine unintialize variable or return value of function with no return value

function sayHello(username: string) {
  console.log("Hello : ", username);
}
console.log("I Am Function Return Value : ", sayHello("Nuredin Bedru"));

let userInfo: any = {
  userName: "Nuredin Bedru",
  email: "nure@gmail.com",
};
console.log("Undefine For non Existing Field Accessing : ", userInfo.password);
