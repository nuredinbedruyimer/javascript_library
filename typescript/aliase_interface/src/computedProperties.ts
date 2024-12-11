//  First Learn about Record

type UserRole = "admin" | "editor" | "view";

let permissions: Record<UserRole, string> = {
  admin: "Access All Databases",
  editor: "Edit Databases",
  view: "View All Databases",
};
console.log("Permissions : ", permissions.admin);

type UserInfoType = Record<string, number>;

let userInfo: UserInfoType = {
  profileImageCOunt: 20,
  follower: 34,
  likes: 233,
};
console.log(userInfo);

let actualPrice: string = "actualPrice";

type Product = {
  productId: string;
  productName: string;
  basePrice: number;

  get actualPrice(): number;
};
let tax = 0.2;
let getActualPrice = (price: number) => price * (1 + tax);
let nike: Product = {
  productId: "1",
  productName: "Nike Something",
  basePrice: 6500,
  get actualPrice() {
    return getActualPrice(this.basePrice);
  },
};

console.log("Product : ", nike);

type UserType = {
  userId: number;
  userName: string;
  email: string;
  [imageUrl: string]: any;
};

let userT: UserType = {
  userId: 1,
  userName: "Abebe",
  email: "email",
  imageUrl: "http://image.png",
};

console.log("User T : ", userT);
