import { useState } from "react";
import PostCard from "../components/post-card/post-card";

export default function Page() {

    const [posts, setPosts] = useState<any>([]);

    // Get rencent posts
    fetch('http://127.0.0.1:1337/api/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data =>setPosts(data.data));

    return <div className="main-content">
        <h1>Blog</h1>
        <div className="posts-list">
          {
          posts.map((item:any) => 
            <div>{item.Title}</div>
          )}
        </div>
    </div>
}