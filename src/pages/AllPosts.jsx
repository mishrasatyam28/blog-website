import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Content, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((post) => {
    if (post) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Content>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}

export default AllPosts;
