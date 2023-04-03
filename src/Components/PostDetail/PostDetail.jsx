import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const { id, title, userId, body } = post;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Number of : {id}</h2>
      <h5>{title}</h5>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetail;
