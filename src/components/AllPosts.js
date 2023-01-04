import React from "react";
import Post from "./Post";
import { CallPosts } from "../hooks";


export default function AllPosts() {
  const { posts } = CallPosts();
  return posts.map((post) => <Post key={post._id} post={post} />);
}