import { useState } from "react";

// Page component
export default function Page() {
  const [posts, setPosts] = useState<any>([]);

  // Get rencent posts
  /*
  fetch('http://127.0.0.1:1337/api/posts?populate=image', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => setPosts(data.data));*/

    return <div className="main-content">
      <h1>Home</h1>
    </div>
  }