import React from "react";

const Item = ({ data }) => {
  // console.log(id);

  return (
    <div className="item">
      <img src={data.image} style={{ width: "300px", height: "250px" }} />
      <div className="headers">
        <div className="heading">{data.name}</div>
        <div className="category">{data.category.toUpperCase()}</div>
        <div className="description">{data.description}</div>
        <div className="price">Price : {data.price}</div>
      </div>
    </div>
  );
};

export default Item;
