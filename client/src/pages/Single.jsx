import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://picsum.photos/200/300" alt="" />
        <div className="user">
          <img src="https://picsum.photos/200/300" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 Days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptatum reiciendis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae
          vero corporis. Enim magnam doloremque eveniet accusamus est quia
          itaque, quaerat et atque, officiis fuga pariatur dolor temporibus
          ipsum cumque. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Aliquam dolores amet explicabo magnam quam laboriosam quae sunt
          voluptatem? Impedit quibusdam animi inventore iste exercitationem
          ipsa. <br />
          <br />
          Pariatur cupiditate hic obcaecati illum? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Rerum voluptas placeat nostrum sint
          reiciendis inventore consequuntur, provident atque. Vero debitis
          consequatur id accusamus in dolor explicabo error culpa molestias
          similique? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Aliquam eligendi cum ea ducimus voluptatibus. Et, voluptates.
          Cupiditate, nulla hic pariatur quae sint commodi, accusamus rem
          obcaecati placeat repudiandae totam! Perspiciatis?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque, fugit odio esse officiis voluptate minus reiciendis itaque rem obcaecati voluptatum distinctio id necessitatibus aspernatur sint amet. Est, saepe minus.
        </p>
      </div>
      <div className="menu">M</div>
    </div>
  );
};

export default Single;
