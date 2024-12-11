"use strict";
//  First Learn about Record
let permissions = {
    admin: "Access All Databases",
    editor: "Edit Databases",
    view: "View All Databases",
};
console.log("Permissions : ", permissions.admin);
let userInfo = {
    profileImageCOunt: 20,
    follower: 34,
    likes: 233,
};
console.log(userInfo);
let actualPrice = "actualPrice";
let tax = 0.2;
let getActualPrice = (price) => price * (1 + tax);
let nike = {
    productId: "1",
    productName: "Nike Something",
    basePrice: 6500,
    get actualPrice() {
        return getActualPrice(this.basePrice);
    },
};
console.log("Product : ", nike);
let userT = {
    userId: 1,
    userName: "Abebe",
    email: "email",
    imageUrl: "http://image.png",
};
console.log("User T : ", userT);
