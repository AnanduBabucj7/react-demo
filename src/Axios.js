import React, { useState } from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts/';

export default function Axios() {
  const [post, setPost] = useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return 'Nodata';
  return (
    <div>
      <h1>Axios</h1>
      <p>URL : {baseURL} </p>
      <p>Result from API : </p>

      <h4> {post[1].title} </h4>
      <p>{post[2].body}</p>
    </div>
  );
}
