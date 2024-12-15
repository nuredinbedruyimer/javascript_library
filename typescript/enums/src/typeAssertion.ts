let userId: any = "1";

let userIdNumber: number = Number(userId as string);
console.log("User Id Type : ", typeof userIdNumber);

enum UserRolesType {
  Admin = "ADMIN",
  Editor = "USER",
  Guest = "GUEST",
  Viewer = "VIEWER",
}
type User = {
  userId: string | number;
  userName: string;
  role: UserRolesType;
};

let userFromAPiCall = '{"userId": 1, "userName": "Nuredin", "role":"Admin"}';

let jsonUser = JSON.parse(userFromAPiCall);
let userData = {
  userId: jsonUser.userId,
  userName: jsonUser.userName,
  role: jsonUser.role as UserRolesType,
};
console.log(userData);
