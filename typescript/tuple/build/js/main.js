"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let student = ["Nuredin", 3.8, true];
// student.push(1);    error
console.log(student);
// console.log(student[0]);  get first element of tuple
let getLetter = () => {
    let name = "Nuredin";
    let message = ` Hey ${name}`;
    return [name, message];
};
// console.log(getLetter()); or
let [userName, message] = getLetter();
console.log(`Name : ${userName} Message : ${message}`);
let fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch("https://jsonplaceholder.typicode.com/users");
    let data = yield response.json();
    return [response.status, data];
});
let serverResponse;
fetchData().then((response) => {
    serverResponse = {
        status: response[0],
        data: response[1],
    };
    console.log(serverResponse.data);
});
