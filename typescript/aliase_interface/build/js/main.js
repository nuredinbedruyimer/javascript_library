"use strict";
// With out Alise ANd Interfaces
let robin = {
    id: 2,
    firstName: "Nico",
    lastName: "Robin",
    isAdmin: true,
};
let trunk = {
    id: 2,
    firstName: "Trunk",
    lastName: "Vegita",
    isAdmin: false,
};
const createUser = (user) => {
    let createdUser = {
        id: String(user.id),
        fullName: user.firstName + " " + user.lastName,
        isAdmin: Boolean(user.isAdmin),
    };
    return createdUser;
};
console.log("Nico Robin : ", createUser(robin));
let employeesList = [
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
const printStaffDetail = (staff) => {
    if ("employees" in staff) {
        //  Manager
        let message = `Manager : ${staff.name} Manages : ${staff.employees.length} Employee.`;
        console.log(message);
    }
    else {
        console.log(`Employee Work In ${staff.department} Department`);
    }
};
for (let emp of employeesList) {
    printStaffDetail(emp);
}
let userOne = {
    id: "1",
    username: "Luffy",
    email: "luffy@onepeice.series",
};
let adminUser = {
    id: "2",
    username: "Midoriya",
    email: "midoriya@hero.series",
    isAdmin: true,
    numberOfOrder: 23,
};
let display = (user) => {
    if ("isAdmin" in user) {
        console.log(`User : ${user.username} is Admin`);
    }
    else {
        console.log(`User :  ${user.username} is Not Admin`);
    }
};
display(adminUser);
