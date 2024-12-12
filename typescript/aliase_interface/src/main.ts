// With out Alise ANd Interfaces

type UserInput = {
  id: string | number;
  firstName: string;
  lastName: string;
  isAdmin: boolean | number;
};

type UserOutput = {
  id: string;
  fullName: string;
  isAdmin: boolean;
};

let robin: UserInput = {
  id: 2,
  firstName: "Nico",
  lastName: "Robin",
  isAdmin: true,
};

let trunk: UserInput = {
  id: 2,
  firstName: "Trunk",
  lastName: "Vegita",
  isAdmin: false,
};

const createUser = (user: UserInput): UserOutput => {
  let createdUser: UserOutput = {
    id: String(user.id),
    fullName: user.firstName + " " + user.lastName,
    isAdmin: Boolean(user.isAdmin),
  };
  return createdUser;
};
console.log("Nico Robin : ", createUser(robin));

type Employee = {
  id: string;
  name: string;
  department: string;
};
type Manager = {
  id: string;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

let employeesList: Staff[] = [
  {
    id: "E001",
    name: "Alice Johnson",
    employees: [
      { id: "E002", name: "Bob Smith", department: "Human Resources" },
      { id: "E003", name: "Catherine Brown", department: "IT" },
      { id: "E004", name: "David Wilson", department: "Operations" },
    ],
  },
  { id: "E002", name: "Bob Smith", department: "Human Resources" },
  { id: "E003", name: "Catherine Brown", department: "IT" },
  { id: "E004", name: "David Wilson", department: "Operations" },
  { id: "E005", name: "Evelyn Davis", department: "Marketing" },
  {
    id: "E006",
    name: "Frank Miller",
    employees: [{ id: "E005", name: "Evelyn Davis", department: "Marketing" }],
  },
];

type PrintStaffDetailType = (staff: Staff) => void;

const printStaffDetail: PrintStaffDetailType = (staff) => {
  if ("employees" in staff) {
    //  Manager
    let message = `Manager : ${staff.name} Manages : ${staff.employees.length} Employee.`;
    console.log(message);
  } else {
    console.log(`Employee Work In ${staff.department} Department`);
  }
};

for (let emp of employeesList) {
  printStaffDetail(emp);
}
