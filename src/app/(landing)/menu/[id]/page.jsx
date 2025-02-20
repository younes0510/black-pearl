"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/lib/basketSlice";
import { useParams } from "next/navigation";

export default function Plat() {
  const params = useParams();
  const [plat, setPlat] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchPlat = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/plats/${params.id}`
        );
        setPlat(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlat();
  }, [params.id]);

  const handleAddToBasket = async () => {
    const platToAdd = {
      ...plat,
      quantity,
    };

    dispatch(addToBasket(platToAdd));
    setPlat((plat) => ({
      ...plat,
      quantity: plat.quantity - quantity,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg font-sans my-20">
      <div className="flex flex-wrap md:flex-nowrap gap-20 w-full">
        <img
          className="w-96 h-auto mb-6 rounded-lg object-cover shadow-md"
          src={plat.image}
          alt={plat.name}
        />

        <div className="w-full">
          <div>
            <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 uppercase mb-5 text-center">
              {plat.name}
            </h1>
            <p className="text-lg mb-5 text-gray-700 leading-relaxed">
              {plat.description}
            </p>
          </div>
          <hr className="my-6 border-gray-300" />
          <h1 className="text-3xl text-gray-900 font-bold mt-4">Prix :</h1>
          <p className="text-2xl text-gray-800 font-semibold">
            {plat.price} DZD
          </p>

          <h1 className="text-3xl text-gray-900 font-bold my-4">Quantité :</h1>
          <div className="border border-gray-400 text-gray-900 flex justify-between items-center w-28 h-12 rounded-lg mt-4 shadow-sm">
            <FaAngleLeft
              className="text-2xl border-r border-gray-400 flex-1 flex items-center justify-center cursor-pointer text-gray-600 hover:text-black transition-all duration-300"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            />
            <h1 className="flex-1 text-center text-lg font-semibold">
              {quantity}
            </h1>
            <FaAngleRight
              className="text-2xl border-l border-gray-400 flex-1 flex items-center justify-center cursor-pointer text-gray-600 hover:text-black transition-all duration-300"
              onClick={() =>
                setQuantity((prev) => Math.min(prev + 1, plat.quantity))
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <button
              className="mt-6 bg-[#002d18] text-white py-3 px-6 rounded-lg hover:bg-[#0d251a] transition-all duration-300 text-lg font-semibold tracking-wide w-full shadow-md flex gap-4 justify-center"
              onClick={handleAddToBasket}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}