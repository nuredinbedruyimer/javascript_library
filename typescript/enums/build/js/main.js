"use strict";
// Integer Enum
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var HtteRequesttatus;
(function (HtteRequesttatus) {
    HtteRequesttatus["LOADING"] = "Loading";
    HtteRequesttatus["SUCCESS"] = "Success";
    HtteRequesttatus["ERROR"] = "Failure";
})(HtteRequesttatus || (HtteRequesttatus = {}));
let fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    let apiResponse = {
        status: HtteRequesttatus.LOADING,
    };
    try {
        let response = yield fetch("https://jsonplaeholder.typicode.com/posts");
        let data = yield response.json();
        apiResponse.data = data ? data : [];
        apiResponse.status = response.ok
            ? HtteRequesttatus.SUCCESS
            : HtteRequesttatus.ERROR;
        return apiResponse;
    }
    catch (error) {
        apiResponse.error = `Error : ${error}`;
        apiResponse.data = [];
        apiResponse.status = HtteRequesttatus.ERROR;
        return apiResponse;
    }
});
fetchPosts().then((response) => {
    if (response.status === HtteRequesttatus.SUCCESS) {
        console.log(response.data);
    }
    else {
        console.log(response.error);
    }
});
//  With Switch
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "ADMIN";
    UserRoles["Editor"] = "USER";
    UserRoles["Guest"] = "GUEST";
    UserRoles["Viewer"] = "VIEWER";
})(UserRoles || (UserRoles = {}));
let printAccess = (role) => {
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
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Completed"] = "COMPLETED";
    PaymentStatus["Failed"] = "FAILED";
    PaymentStatus["Refunded"] = "REFUNDED";
    PaymentStatus["Invalid"] = "Invalid";
})(PaymentStatus || (PaymentStatus = {}));
let printOrderInfo = (order) => {
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
let pendingOrder = {
    orderId: "Ord1",
    amount: 20,
    status: PaymentStatus.Pending,
};
console.log("Order : ", printOrderInfo(pendingOrder));
let completedOrder = {
    orderId: "Ord1",
    amount: 20,
    status: PaymentStatus.Completed,
};
console.log("Order : ", printOrderInfo(completedOrder));
let failedOrder = {
    orderId: "Ord1",
    amount: 20,
    status: PaymentStatus.Failed,
};
console.log("Order : ", printOrderInfo(failedOrder));
let refendOrder = {
    orderId: "Ord1",
    amount: 20,
    status: PaymentStatus.Refunded,
};
console.log("Order : ", printOrderInfo(refendOrder));
let invalidOrder = {
    orderId: "Ord1w",
    amount: 20,
    status: PaymentStatus.Invalid,
};
console.log("Order : ", printOrderInfo(invalidOrder));
