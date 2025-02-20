"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { removeFromBasket } from "@/lib/basketSlice";
import Link from "next/link";

export default function Commande() {
  const plats = useSelector((state) => state.basket.plats);
  const [error, setError] = useState(null);
  
  const dispatch = useDispatch();
  const basketLength = plats.length;
  const totalPrice = plats.reduce((old, item) => {
    return old + (item.plat?.price || 0) * item.quantity;
  }, 0);

  const handleCreateOrder = async () => {
    const orderDetails = {
      items: plats.map((plat) => ({
        plat: plat.plat.id,
        quantity: plat.quantity,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/orders",
        orderDetails
      );
      setError(null);
      console.log('Order created successfully:', response.data);
    } catch (err) {
      if (err.response && err.response.data) {
        const errorMessages = err.response.data.map((error) => error.message).join(", ");
        setError(errorMessages);
      } else {
        setError("An unexpected error occurred");
      }
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 max-w-7xl mx-auto">
        <div className="w-full text-black py-9">
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-100 w-full max-w-2xl mx-auto my-8 rounded-lg p-4 shadow-lg">
              {plats.map((item, index) => (
                <div key={item.plat?.id || index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                  {item.plat?.image && (
                    <img
                      src={item.plat.image}
                      className="w-28 h-40 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex flex-col flex-grow px-4">
                    <ul>
                      <li className="text-gray-800 text-lg font-semibold">
                        {item.plat?.name || "Unknown plat"}
                      </li>
                      <li className="text-gray-600">
                        quantity: {item.quantity}
                      </li>
                      <li className="text-green-600 text-lg font-bold">
                        {item.plat?.price || 0} DZD
                      </li>
                    </ul>
                  </div>
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(removeFromBasket(index))}
                  >
                    <MdOutlineDeleteOutline />
                  </button>
                </div>
              ))}
            </div>
            <div className="space-y-6 mb-8  w-full max-w-2xl mx-auto my-8 rounded-lg p-4 shadow-lg text-white">
              <div className="space-y-6 mb-8 w-full max-w-2xl mx-auto my-8 p-4">
                <button
                  className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
                  onClick={handleCreateOrder}
                >
                  Passer la commande
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}