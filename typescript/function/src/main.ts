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
  percentage?: number
): number {
  let totalPrice: number = unitPrice * itemsCount;
  let discount: number = (percentage || 0) * totalPrice;

  return totalPrice - discount;
}

let totalSpent: number = calculateTotalPrice(100);

console.log("Total Price : ", totalSpent);

// Rest Parameters

function avarageScore(
  studentName: string,
  ...scores: number[]
): [string, number] {
  let newScores: number[] = scores.map((score) => {
    if (score <= 90) {
      return score + 10;
    } else {
      return score;
    }
  });

  let totalScore: number = newScores.reduce(
    (previousValue: number, currValue: number) => {
      return previousValue + currValue;
    },
    0
  );

  return [studentName, totalScore / scores.length];
}

let [stuName, avarage]: [string, number] = avarageScore(
  "Nuredin Bedru",
  89,
  98,
  78,
  89.9,
  67
);
console.log(stuName, avarage);

function processInput(inputvalue: string | number) {
  if (typeof inputvalue === "number") {
    let doubledValue: number = 2 * inputvalue;
    console.log("Doubled Value : ", doubledValue);
  } else if (typeof inputvalue === "string") {
    let transformedString: string = inputvalue.toUpperCase();
    console.log("Transformed String : ", transformedString);
  } else {
    console.log("Invalid Input Type");
  }
}

processInput(200);
processInput("Jhon");
// processInput(true)

// Object as Parameter and return type Version One(withbout alias )
const getProductUsingID = ({
  productID,
}: {
  productID: string | number;
}): { productID: string | number; productName: string; quentity: number } => {
  return {
    productID: productID,
    productName: "productOneName",
    quentity: 20,
  };
};

let fetchedProductOne: {
  productID: string | number;
  productName: string;
  quentity: number;
} = getProductUsingID({ productID: 20 });
console.log("Fetched Product Using ID : ", fetchedProductOne);

// Object as Parameter and return type Version One(With Alias)
type getProductUsingID = {
  productID: string | number;
};
type Product = {
  productID: string | number;
  productName: string;
  quentity: number;
};
const getProductUsingIDAlias = ({ productID }: getProductUsingID): Product => {
  return {
    productID: productID,
    productName: "productOneName",
    quentity: 20,
  };
};

let fetchedProductTwo: Product = getProductUsingIDAlias({ productID: 20 });
console.log("Fetched Product Using ID Using Alias : ", fetchedProductOne);

//  process Data

function processData(
  inputData: string | number,
  { reverse }: { reverse: boolean }
): string | number {
  let returnValue: string | number;
  if (typeof inputData === "number") {
    returnValue = 2 * inputData;
  } else {
    if (reverse === true) {
      returnValue = inputData.split("").reverse().join("").toUpperCase();
    } else {
      returnValue = inputData.toUpperCase();
    }
  }

  return returnValue;
}

//  number, reverse(true or false) does not matter

let input: string | number = "Nuredin Bedru";
let reverseStatus: {
  reverse: boolean;
} = {
  reverse: true,
};

console.log(
  "Function Call For Number Input :",
  processData(input, reverseStatus)
);

console.log(
  "Function Call For String Input And Reverse True :",
  processData(input, reverseStatus)
);

console.log(
  "Function Call For String Input And Reverse True :",
  processData(input, { reverse: false })
);
