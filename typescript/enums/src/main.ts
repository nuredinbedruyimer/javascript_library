// Integer Enum

enum HtteRequesttatus {
  LOADING = "Loading",
  SUCCESS = "Success",
  ERROR = "Failure",
}
interface Post {
  userId: string | number;
  id: string | number;
  title: string;
  body: string;
}

type ApiResponse = {
  status: HtteRequesttatus;
  data?: Post[];
  error?: string;
};

export const fetchPosts = async (): Promise<ApiResponse> => {
  let apiResponse: ApiResponse = {
    status: HtteRequesttatus.LOADING,
  };

  try {
    let response = await fetch("https://jsonplaeholder.typicode.com/posts");
    let data = await response.json();

    apiResponse.data = data ? (data as Post[]) : [];
    apiResponse.status = response.ok
      ? HtteRequesttatus.SUCCESS
      : HtteRequesttatus.ERROR;

    return apiResponse;
  } catch (error) {
    apiResponse.error = `Error : ${error}`;
    apiResponse.data = [];
    apiResponse.status = HtteRequesttatus.ERROR;
    return apiResponse;
  }
};

fetchPosts().then((response) => {
  if (response.status === HtteRequesttatus.SUCCESS) {
    console.log(response.data);
  } else {
    console.log(response.error);
  }
});

//  With Switch

enum UserRoles {
  Admin = "ADMIN",
  Editor = "USER",
  Guest = "GUEST",
  Viewer = "VIEWER",
}

let printAccess = (role: UserRoles): string => {
  switch (role) {
    case UserRoles.Admin:
      return "Admin Access";
    case UserRoles.Editor:
      return "Editor Access";
    case UserRoles.Guest:
      return "Viewer Access";
    default:
      return "Invalid Access";
  }
};

console.log("User Access Is : ", printAccess(UserRoles.Viewer));
console.log("User Access Is : ", printAccess(UserRoles.Admin));

//  Last Payment Thing

enum PaymentStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
  Failed = "FAILED",
  Refunded = "REFUNDED",
  Invalid = "Invalid",
}

type OrderType = {
  orderId: string | number;
  amount: number;
  status: PaymentStatus;
};

let printOrderInfo = (order: OrderType): string => {
  switch (order.status) {
    case PaymentStatus.Pending:
      return `${order.orderId} is Pending ...`;
    case PaymentStatus.Completed:
      return `${order.orderId} is Completed `;
    case PaymentStatus.Failed:
      return `${order.orderId} is Failure Try Again `;
    case PaymentStatus.Refunded:
      return `${order.orderId} is Refund `;
    default:
      return `No Order With Id  : ${order.orderId}`;
  }
};

let pendingOrder: OrderType = {
  orderId: "Ord1",
  amount: 20,
  status: PaymentStatus.Pending,
};
console.log("Order : ", printOrderInfo(pendingOrder));
let completedOrder: OrderType = {
  orderId: "Ord1",
  amount: 20,
  status: PaymentStatus.Completed,
};
console.log("Order : ", printOrderInfo(completedOrder));

let failedOrder: OrderType = {
  orderId: "Ord1",
  amount: 20,
  status: PaymentStatus.Failed,
};

console.log("Order : ", printOrderInfo(failedOrder));

let refendOrder: OrderType = {
  orderId: "Ord1",
  amount: 20,
  status: PaymentStatus.Refunded,
};
console.log("Order : ", printOrderInfo(refendOrder));

let invalidOrder: OrderType = {
  orderId: "Ord1w",
  amount: 20,
  status: PaymentStatus.Invalid,
};
console.log("Order : ", printOrderInfo(invalidOrder));
