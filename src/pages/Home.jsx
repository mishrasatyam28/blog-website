import React, { useEffect, useState } from "react";
import appwriteServices from "../appwrite/config";
import { Content, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteServices.getPosts().then((post) => {
      if (post) {
        setPosts(post);
      }
    });
  }, [posts]);

  if (posts.length === 0) {
    return (
      <Content>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read posts
            </h1>
          </div>
        </div>
      </Content>
    );
  }

  return (
    <div className="w-full py-8">
      <Content>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}

export default Home;
