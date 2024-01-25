import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Title 1",
      desc: "Description 1",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 1,
      title: "Title 2 lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://picsum.photos/200/300"
    },
    {
      id: 1,
      title: "Title 3",
      desc: "Description lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://picsum.photos/200/300"
    }
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
