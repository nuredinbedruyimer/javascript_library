// When We Just Directly Intialize The Array The Compiler Infer The type
//  let names: string[] is the type of below code
let names = [
  "Monkey D Luffy",
  "Naruto Uzumaki",
  "Korusaki Ichigo",
  "Modoriya Uzuki",
];
names.push("Ronona Zoro");

let typedNames: string[] = ["Nami", "Momo", "Yamato", "Robin"];

console.log(typeof typedNames === typeof names);
// The compiler Infer The Type from The intialization that mean string | number
let animeTitles = ["Onepeice", 86, "Naruto", "Uzumaki"];
// ! not workinh because boolean type is not part of the array
// animeTitles.push(true)
animeTitles.push("Hunter X Hunter");

let animeName: string = "ReZero";
animeTitles.push(animeName);

console.log(animeTitles);
//  The same as the above explicitly define the type

let otherAnimeTitles: (string | number)[] = [
  "DanDaDan",
  "Wind Breaker",
  17,
  "My Hero Acadamia",
];
// otherAnimeTitles.push(true)

let amouns = [12, 43, 43.4, 54.444];

otherAnimeTitles.push("Bleach");

console.log(otherAnimeTitles);

function getSum(amounts: number[]): number {
  let total: number = 0;
  for (let index: number = 0; index < amounts.length; index++) {
    total = total + amounts[index];
  }

  return total;
}

let isValid: boolean = true;
let stringExpression = animeName.toUpperCase();
let totalAmount = getSum(amouns);

let moreMixedArray = [
  "That Time I Incarneated As Slime",
  68,
  true,
  stringExpression,
  totalAmount,
  isValid,
];

console.log(moreMixedArray);

// We can copy the less mixed Array To The more Mixed It Is Possoble

let userTuple: [string, boolean, number] = ["Nuredin Bedru", true, 22];
console.log("User : ", userTuple);
