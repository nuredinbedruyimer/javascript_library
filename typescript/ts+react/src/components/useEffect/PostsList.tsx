import { useState, useEffect } from "react";

type Post = {
  userId: string | number;
  id: string | number;
  title: string;
  body: string;
};

const PostsList = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  let fetchPosts = async (): Promise<Post[]> => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = (await response.json()) as Post[];
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    console.log("Mounted");
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, [count]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <div>
            <h1>{count}</h1>
            <button className="btn" onClick={() => setCount((pre) => pre + 1)}>
              {" "}
              Add Counter
            </button>
          </div>

          <div>
            {posts &&
              posts.map((post) => {
                return (
                  <div key={post.id}>
                    <h3>{post.title}</h3>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsList;
