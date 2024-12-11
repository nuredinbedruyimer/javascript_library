"use strict";
let bike = {
    productId: "Id2023",
    productName: "Bike2023",
    unitPrice: 20.5,
    quentity: 10,
    getTotalPrice() {
        return this.unitPrice * this.quentity;
    },
    printName() {
        return `${this.productName} is Amazing Product !!`;
    },
    getMessage: (message) => {
        return `Wow ,  ${message}`;
    },
};
console.log(bike.getMessage("Amazing Bike I Have Ever See, "));
let hp = {
    id: "2344",
    brand: "HP",
    ram: 8,
    storage: 1,
    upgradeRam() {
        this.ram = 2 * this.ram;
    },
};
console.log("HP COmputer : ", hp);
hp.upgradeRam();
console.log("HP COmputer : ", hp);
let formDataOne = {
    username: "Name1",
    email: "e-mail1",
    password: "password",
    imageUrl: "http://some.png",
    getDetailData() {
        return `User Name : ${this.username} E-mail: ${this.email} `;
    },
};
console.log(formDataOne.imageUrl);
let adminOne = {
    username: "Luffy",
    email: "luffy@onepeice.oda",
    password: "password",
    orderStatus: "delivered",
    totalSales: 300000,
};
console.log("Admin User : ", adminOne);
let normalUser = {
    username: "Nuredin",
    email: "nure@onepeice.fan",
    password: "password",
    numberOfOrder: 21,
};
console.log("Normal User : ", normalUser);
