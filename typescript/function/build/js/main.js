"use strict";
function sayHello(name) {
    return `Hello  ${name}`;
}
let userName = "Shiv Khera";
console.log(sayHello(userName));
function calculateDiscount(price, percentage) {
    return price * percentage;
}
let oldPrice = 1200;
let percentage = 0.95;
let newPrice = calculateDiscount(oldPrice, percentage);
console.log("New Price After Discount : ", newPrice);
let names = [
    "CodeCraft",
    "DevSphere",
    "ByteHive",
    "LogicLayer",
    "CloudForge",
    "PixelPeak",
    "StackStride",
    "SyntaxHub",
    "DataDock",
    "AppNucleus",
];
function isNameFound(inputName) {
    for (let name of names) {
        if (name === inputName) {
            return true;
        }
    }
    return false;
}
let selectedName = [
    "CloudForge",
    "PixelPeak",
    "StackStride",
    "StackStrided",
    "SyntaxHub",
];
let selectedNames = [];
for (let name of selectedName) {
    if (isNameFound(name)) {
        selectedNames.push(name);
    }
}
console.log("Selected Name : ", selectedNames);
//  optional Parameter
function calculateTotalPrice(itemsCount, unitPrice = 1, percentage) {
    let totalPrice = unitPrice * itemsCount;
    let discount = (percentage || 0) * totalPrice;
    return totalPrice - discount;
}
let totalSpent = calculateTotalPrice(100);
console.log("Total Price : ", totalSpent);
// Rest Parameters
function avarageScore(studentName, ...scores) {
    let newScores = scores.map((score) => {
        if (score <= 90) {
            return score + 10;
        }
        else {
            return score;
        }
    });
    let totalScore = newScores.reduce((previousValue, currValue) => {
        return previousValue + currValue;
    }, 0);
    return [studentName, totalScore / scores.length];
}
let [stuName, avarage] = avarageScore("Nuredin Bedru", 89, 98, 78, 89.9, 67);
console.log(stuName, avarage);
function processInput(inputvalue) {
    if (typeof inputvalue === "number") {
        let doubledValue = 2 * inputvalue;
        console.log("Doubled Value : ", doubledValue);
    }
    else if (typeof inputvalue === "string") {
        let transformedString = inputvalue.toUpperCase();
        console.log("Transformed String : ", transformedString);
    }
    else {
        console.log("Invalid Input Type");
    }
}
processInput(200);
processInput("Jhon");
// processInput(true)
// Object as Parameter and return type Version One(withbout alias )
const getProductUsingID = ({ productID, }) => {
    return {
        productID: productID,
        productName: "productOneName",
        quentity: 20,
    };
};
let fetchedProductOne = getProductUsingID({ productID: 20 });
console.log("Fetched Product Using ID : ", fetchedProductOne);
const getProductUsingIDAlias = ({ productID }) => {
    return {
        productID: productID,
        productName: "productOneName",
        quentity: 20,
    };
};
let fetchedProductTwo = getProductUsingIDAlias({ productID: 20 });
console.log("Fetched Product Using ID Using Alias : ", fetchedProductOne);
//  process Data
function processData(inputData, { reverse }) {
    let returnValue;
    if (typeof inputData === "number") {
        returnValue = 2 * inputData;
    }
    else {
        if (reverse === true) {
            returnValue = inputData.split("").reverse().join("").toUpperCase();
        }
        else {
            returnValue = inputData.toUpperCase();
        }
    }
    return returnValue;
}
//  number, reverse(true or false) does not matter
let input = "Nuredin Bedru";
let reverseStatus = {
    reverse: true,
};
console.log("Function Call For Number Input :", processData(input, reverseStatus));
console.log("Function Call For String Input And Reverse True :", processData(input, reverseStatus));
console.log("Function Call For String Input And Reverse True :", processData(input, { reverse: false }));
let add = (numOne, numTwo) => {
    return numOne + numTwo;
};
console.log(add(20, 120));
