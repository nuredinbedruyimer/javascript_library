import { Post } from "./types";

function getValue<GenericType>(value: GenericType): GenericType {
  return value;
}

let post: Post = {
  userId: "UserID1",
  id: "UserID2",
  title: "User1 Title",
  body: "User1 Content",
};

console.log(getValue(true));
console.log(getValue("I am string"));
console.log(getValue(232));
console.log(getValue(post));

function getFirst<G>(arr: G[]): G {
  return arr[0];
}

console.log(getFirst(["First", "Second", "Third"]));
console.log(getFirst([true, false, true]));
console.log(getFirst([1, 10, 10]));

// Rea;Life Examples For The Below case we just fetch POst when we try to fetch just change the data as User, product .

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchPosts<Post>(): Promise<ApiResponse<Post>> {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();

  return {
    data: data as Post,
    status: response.status,
    message: "Posts Fetched Successfully",
  };
}

fetchPosts().then((response) => {
  console.log(response);
});
