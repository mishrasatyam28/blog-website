import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Content, PostCard } from "../components";
import heroImage from "../assets/heroImage.webp";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center justify-center items-center ">
        <Content>
          <div className="flex flex-wrap ">
            <div className="lg:w-1/2 md:w-1/2 lg:m-auto md:m-auto ">
              <img src={heroImage} alt="" className="" />
            </div>

            <div className="p-2 w-full ">
              <h1 className="text-3xl font-bold hover:text-gray-600 cursor-pointer ">
                Login to read posts
              </h1>
            </div>
          </div>
        </Content>
      </div>
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
