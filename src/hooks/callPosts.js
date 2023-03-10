import { useState, useEffect } from "react";
import { BASE_URL } from "../api";

export function CallPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const { success, error, data } = await response.json();

        if (success) {
          setPosts(data.posts);
        } else {
          console.error(error.message);
        }
      } catch (ex) {
        console.error(ex);
      }
    };

    getPosts();
  }, []);

  return { posts };
}