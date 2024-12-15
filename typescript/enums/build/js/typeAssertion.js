"use strict";
let userId = "1";
let userIdNumber = Number(userId);
console.log("User Id Type : ", typeof userIdNumber);
var UserRolesType;
(function (UserRolesType) {
    UserRolesType["Admin"] = "ADMIN";
    UserRolesType["Editor"] = "USER";
    UserRolesType["Guest"] = "GUEST";
    UserRolesType["Viewer"] = "VIEWER";
})(UserRolesType || (UserRolesType = {}));
let userFromAPiCall = '{"userId": 1, "userName": "Nuredin", "role":"Admin"}';
let jsonUser = JSON.parse(userFromAPiCall);
let userData = {
    userId: jsonUser.userId,
    userName: jsonUser.userName,
    role: jsonUser.role,
};
console.log(userData);
