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
function calculateTotalPrice(itemsCount, unitPrice = 1, percentage = 0) {
    let totalPrice = (unitPrice || 0) * itemsCount;
    let discount = (percentage || 0) * totalPrice;
    return totalPrice - discount;
}
let totalSpent = calculateTotalPrice(100, 20);
console.log("Total Price : ", totalSpent);
