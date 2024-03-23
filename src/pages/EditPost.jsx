import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Content, PostForm } from "../components";
import appwriteServices from "../appwrite/config";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteServices.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Content>
        <PostForm post={post} />
      </Content>
    </div>
  ) : null;
}

export default EditPost;
