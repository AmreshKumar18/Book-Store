import React from "react";

const Card = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="mt-4 my-3 max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="card w-64 bg-base-100 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">RS. {item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-2000 p-4">
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
