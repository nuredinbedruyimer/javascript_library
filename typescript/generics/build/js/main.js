var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getValue(value) {
    return value;
}
let post = {
    userId: "UserID1",
    id: "UserID2",
    title: "User1 Title",
    body: "User1 Content",
};
console.log(getValue(true));
console.log(getValue("I am string"));
console.log(getValue(232));
console.log(getValue(post));
function getFirst(arr) {
    return arr[0];
}
console.log(getFirst(["First", "Second", "Third"]));
console.log(getFirst([true, false, true]));
console.log(getFirst([1, 10, 10]));
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("https://jsonplaceholder.typicode.com/posts");
        let data = yield response.json();
        return {
            data: data,
            status: response.status,
            message: "Posts Fetched Successfully",
        };
    });
}
fetchPosts().then((response) => {
    console.log(response);
});
export {};
