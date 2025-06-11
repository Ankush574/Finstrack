import { useEffect, useState } from 'react';
import axios from '../utils/api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/posts').then(res => setPosts(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Developer Feed</h1>
      {posts.map((p, i) => (
        <div key={i} className="p-4 shadow rounded my-2 bg-white">
          <h2 className="font-semibold">{p.title}</h2>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;