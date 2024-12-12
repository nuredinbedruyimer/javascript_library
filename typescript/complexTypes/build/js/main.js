"use strict";
// When We Just Directly Intialize The Array The Compiler Infer The type
//  let names: string[] is the type of below code
let names = [
    "Monkey D Luffy",
    "Naruto Uzumaki",
    "Korusaki Ichigo",
    "Modoriya Uzuki",
];
names.push("Ronona Zoro");
let typedNames = ["Nami", "Momo", "Yamato", "Robin"];
console.log(typeof typedNames === typeof names);
// The compiler Infer The Type from The intialization that mean string | number
let animeTitles = ["Onepeice", 86, "Naruto", "Uzumaki"];
// ! not workinh because boolean type is not part of the array
// animeTitles.push(true)
animeTitles.push("Hunter X Hunter");
let animeName = "ReZero";
animeTitles.push(animeName);
console.log(animeTitles);
//  The same as the above explicitly define the type
let otherAnimeTitles = [
    "DanDaDan",
    "Wind Breaker",
    17,
    "My Hero Acadamia",
];
// otherAnimeTitles.push(true)
let amouns = [12, 43, 43.4, 54.444];
otherAnimeTitles.push("Bleach");
console.log(otherAnimeTitles);
function getSum(amounts) {
    let total = 0;
    for (let index = 0; index < amounts.length; index++) {
        total = total + amounts[index];
    }
    return total;
}
let isValid = true;
let stringExpression = animeName.toUpperCase();
let totalAmount = getSum(amouns);
let moreMixedArray = [
    "That Time I Incarneated As Slime",
    68,
    true,
    stringExpression,
    totalAmount,
    isValid,
];
console.log(moreMixedArray);
// We can copy the less mixed Array To The more Mixed It Is Possoble
let userTuple = ["Nuredin Bedru", true, 22];
console.log("User : ", userTuple);
// object
let book1 = {
    title: "Atomic Habit",
    auther: {
        name: "James Clear",
        age: 45,
    },
};
let book2 = {
    title: "You Will Win ",
    auther: {
        name: "Shiv Khera",
        age: 65,
    },
};
let book3 = {
    auther: {
        name: "No Auther",
        age: 24,
    },
};
let books = [book1, book2, book3];
for (let book of books) {
    console.log("Book Title : ", book === null || book === void 0 ? void 0 : book.title);
}
let userOne = {
    username: "Monkey D Luffy",
    email: "email@email.com",
    password: "password",
    hoobies: ["Watching Anime", "Reading Manga and Books"],
    scores: [87.4, 75],
};
let userTwo = {
    username: "Naruto Uzumaki",
    password: "password",
    hoobies: ["Watching Anime", "Reading Manga and Books"],
    scores: [87.4, 75],
};
function notify(user) {
    let message = user.email
        ? `User With E-mail ${user.email} Registed as ${user.username} Successfully !!!`
        : `User Is Not Registed Yet !!!`;
    return message;
}
let userThree = {
    username: "No Name",
    email: "no enail",
    password: "no password",
    hoobies: [],
    scores: [],
};
let users = [userOne, userTwo, userThree];
for (let user of users) {
    console.log(notify(user));
}
let onePeice = {
    name: "Onepeice",
    rating: 9.7,
    isCompleted: false,
    voiceActors: [userOne, userThree],
};
console.log(onePeice);
