import React, { useContext } from "react";
import Button from "../Button/button";
import { CartContextValue } from "../CartContext/CartContext";
import { useNavigate } from "react-router";

const Card = ({ product }) => {
  // ================contextApi=================
  const cartContextValue = useContext(CartContextValue);
  const { addToCart } = cartContextValue;

  const { title, price, description, category, image, rating } = product;

  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      {/* Image */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Card Body */}
      <div className="p-4">
        {/* Category */}
        <span className="text-sm text-gray-500 uppercase tracking-wider">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mt-2 truncate">
          {title}
        </h2>

        {/* Price */}
        <p className="text-xl text-orange-500 font-bold mt-2">${price}</p>

        {/* addtocart */}
        <div onClick={() => addToCart(product)}>
          <Button
            text="Add to Cart"
            bgColor="bg-orange-500"
            color="text-white"
          />
        </div>

         <div className="text-lg font-semibold text-gray-800 mt-2 py-2 rounded-lg cursor-pointer hover:opacity-80" onClick={() => navigate(`/${product.id}`)}> 
          <p>View Details</p>
        </div>
        

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center mt-4">
          <span className="text-yellow-500 text-sm font-medium">
            {rating.rate}
          </span>
          <svg
            className="w-5 h-5 text-yellow-500 ml-1"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.954L10 0l2.949 5.956 6.564.954-4.757 4.635 1.122 6.545z" />
          </svg>
          <span className="text-gray-500 text-sm ml-2">
            ({rating.count} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
