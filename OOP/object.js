const user1 = {
  email: "nuredinbedru@gmail.com",
  userName: "Nuredin Bedru",
  password: "Password",
  login() {
    console.log(
      `User With Name : ${this.userName} Logged In With Email : ${this.email}`
    );
    return "Fuck you";
  },
  logout() {
    console.log("User Logout Succcessfully !!");
  },
};

const user2 = {
  email: "abebebesobela@gmail,so",
  userName: "Abebe Beso Bela",
  password: "Paasswor Herw",
  login() {
    console.log(
      `User With Name : ${this.userName} Logged In With Email : ${this.email}`
    );
  },
};
user1.login();
user2.login();
