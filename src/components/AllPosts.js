import React from "react";
import Post from "./Post";
import { usePosts } from "../hooks";

export default function AllPosts() {
  const { posts } = usePosts();
  return posts.map((post) => <Post key={post._id} post={post} />);
}