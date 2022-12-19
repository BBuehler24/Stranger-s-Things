import React from "react";

export default function Post({ post }) {
  const {
    active,
    author,
    title,
    description,
    price,
    createdAt,
    updatedAt,
  } = post || {};

  return (
    <div>
      <h2>{title}</h2>
      <span>{active ? "Active" : "Closed"}</span>
      <div className="author">{author.username}</div>
      <div>Created: { createdAt }</div>
      <div>Last Updated: { updatedAt }</div>
      <div>Description</div>
      <p>{description}</p>
      <div>Price: {price}</div>
    </div>
  );
}