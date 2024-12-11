type GetMessageType = (message: string) => string;

interface ProductType {
  productId: string;
  productName: string;
  unitPrice: number;
  quentity: number;
  getTotalPrice(): number;
  printName(): string;
  getMessage: GetMessageType;
}

let bike: ProductType = {
  productId: "Id2023",
  productName: "Bike2023",
  unitPrice: 20.5,
  quentity: 10,
  getTotalPrice() {
    return this.unitPrice * this.quentity;
  },
  printName() {
    return `${this.productName} is Amazing Product !!`;
  },
  getMessage: (message) => {
    return `Wow ,  ${message}`;
  },
};

console.log(bike.getMessage("Amazing Bike I Have Ever See, "));

interface Computer {
  readonly id: string;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam: () => void;
}

let hp: Computer = {
  id: "2344",
  brand: "HP",
  ram: 8,
  storage: 1,
  upgradeRam() {
    this.ram = 2 * this.ram;
  },
};

console.log("HP COmputer : ", hp);
hp.upgradeRam();
console.log("HP COmputer : ", hp);

interface FormDataType {
  username: string;
  email: string;
  password: string;
  getDetailData(): string;
}
interface FormDataType {
  imageUrl: string;
}

let formDataOne: FormDataType = {
  username: "Name1",
  email: "e-mail1",
  password: "password",
  imageUrl: "http://some.png",
  getDetailData() {
    return `User Name : ${this.username} E-mail: ${this.email} `;
  },
};

console.log(formDataOne.imageUrl);

interface BasicUserInfo {
  username: string;
  email: string;
  password: string;
}

type OrderStatus = "pending" | "shpped" | "delivered";

interface AdminUserInfo extends BasicUserInfo {
  orderStatus: OrderStatus;
  totalSales: number;
}
interface NormalUser extends BasicUserInfo {
  numberOfOrder: number;
}

let adminOne: AdminUserInfo = {
  username: "Luffy",
  email: "luffy@onepeice.oda",
  password: "password",
  orderStatus: "delivered",
  totalSales: 300000,
};

console.log("Admin User : ", adminOne);

let normalUser: NormalUser = {
  username: "Nuredin",
  email: "nure@onepeice.fan",
  password: "password",
  numberOfOrder: 21,
};
console.log("Normal User : ", normalUser);
