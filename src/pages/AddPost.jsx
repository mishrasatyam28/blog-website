import React from "react";
import { Container, PostForm as addPostComponent } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <addPostComponent />
      </Container>
    </div>
  );
}

export default AddPost;
