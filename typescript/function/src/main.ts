function sayHello(name: string) {
  return `Hello  ${name}`;
}
let userName: string = "Shiv Khera";
console.log(sayHello(userName));

function calculateDiscount(price: number, percentage: number): number {
  return price * percentage;
}

let oldPrice: number = 1200;
let percentage: number = 0.95;

let newPrice: number = calculateDiscount(oldPrice, percentage);

console.log("New Price After Discount : ", newPrice);

let names: string[] = [
  "CodeCraft",
  "DevSphere",
  "ByteHive",
  "LogicLayer",
  "CloudForge",
  "PixelPeak",
  "StackStride",
  "SyntaxHub",
  "DataDock",
  "AppNucleus",
];

function isNameFound(inputName: string): boolean {
  for (let name of names) {
    if (name === inputName) {
      return true;
    }
  }
  return false;
}

let selectedName: string[] = [
  "CloudForge",
  "PixelPeak",
  "StackStride",
  "StackStrided",

  "SyntaxHub",
];

let selectedNames: string[] = [];

for (let name of selectedName) {
  if (isNameFound(name)) {
    selectedNames.push(name);
  }
}

console.log("Selected Name : ", selectedNames);

//  optional Parameter

function calculateTotalPrice(
  itemsCount: number,
  unitPrice: number = 1,
  percentage: number = 0
): number {
  let totalPrice: number = (unitPrice || 0) * itemsCount;
  let discount: number = (percentage || 0) * totalPrice;

  return totalPrice - discount;
}

let totalSpent: number = calculateTotalPrice(100, 20);

console.log("Total Price : ", totalSpent);
