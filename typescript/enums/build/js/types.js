var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var HtteRequesttatus;
(function (HtteRequesttatus) {
    HtteRequesttatus["LOADING"] = "Loading";
    HtteRequesttatus["SUCCESS"] = "Success";
    HtteRequesttatus["ERROR"] = "Failure";
})(HtteRequesttatus || (HtteRequesttatus = {}));
export const fetchPosts = () => __awaiter(void 0, void 0, void 0, function* () {
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
export let add = (a, b) => {
    return a + b;
};
