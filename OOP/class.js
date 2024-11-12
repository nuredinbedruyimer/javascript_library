class User {
  constructor(email, userName, password) {
    this.email = email;
    this.userName = userName;
    this.password = password;
  }

  login() {
    console.log(`User ${this.userName} Logged In as: ${this.email}`);
  }

  logout() {
    console.log("User Logged Out !!");
  }
}

const userOne = new User(
  "abenezeradugna@gmail.com",
  "Abenezer Adugna",
  "1134567"
);
const userTwo = new User(
  "hafixhussein@gmail.com",
  "Hafiz Hussein",
  "uyyfyfhfhfhfhfhfhfy"
);

userTwo.login();
