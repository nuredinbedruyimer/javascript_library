let student: readonly [string, number, boolean] = ["Nuredin", 3.8, true];
// student.push(1);    error
console.log(student);
// console.log(student[0]);  get first element of tuple

let getLetter = (): [string, string] => {
  let name: string = "Nuredin";
  let message: string = ` Hey ${name}`;

  return [name, message];
};

// console.log(getLetter()); or

let [userName, message] = getLetter();

console.log(`Name : ${userName} Message : ${message}`);

//  DO Some Staff

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: string | number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

type ServerResponse = {
  status: number;
  data: User[];
};

let fetchData = async (): Promise<[number, User[]]> => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data: User[] = await response.json();

  return [response.status, data];
};

let serverResponse: ServerResponse;

fetchData().then((response) => {
  serverResponse = {
    status: response[0],
    data: response[1],
  };

  console.log(serverResponse.data);
});
