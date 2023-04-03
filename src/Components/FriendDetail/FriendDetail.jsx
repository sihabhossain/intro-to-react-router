import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h3>friend details here</h3>
      <p>Name: {friend.name}</p>
      <p>Phone: {friend.phone}</p>
    </div>
  );
};

export default FriendDetail;
