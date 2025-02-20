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
    <div className="max-w-7xl mx-auto p-8  rounded-lg shadow-lg font-sans my-20">
      <div className="flex flex-wrap md:flex-nowrap gap-20 w-full">
        <img
          className="w-96 h-96  rounded-lg object-cover shadow-md"
          src={plat.image}
          alt={plat.name}
        />

        <div className="w-full">
          <div>
            <h1 className="text-4xl font-extrabold tracking-wide text-white uppercase mb-5 text-center">
              {plat.name}
            </h1>
            <p className="text-lg mb-5 text-gray-300 leading-relaxed">
              {plat.description}
            </p>
          </div>
          <hr className="my-6 border-gray-700" />
          <h1 className="text-3xl text-white font-bold mt-4">Prix :</h1>
          <p className="text-2xl text-gray-300 font-semibold">
            {plat.price} DZD
          </p>

          <h1 className="text-3xl text-white font-bold my-4">Quantité :</h1>
          <div className="border border-gray-700 text-gray-300 flex justify-between items-center w-28 h-12 rounded-lg mt-4 shadow-sm">
            <FaAngleLeft
              className="text-2xl border-r border-gray-700 flex-1 flex items-center justify-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300"
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            />
            <h1 className="flex-1 text-center text-lg font-semibold">
              {quantity}
            </h1>
            <FaAngleRight
              className="text-2xl border-l border-gray-700 flex-1 flex items-center justify-center cursor-pointer text-gray-400 hover:text-white transition-all duration-300"
              onClick={() =>
                setQuantity((prev) => Math.min(prev + 1, plat.quantity))
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <button
              className="mt-6 bg-[#004d40] text-white py-3 px-6 rounded-lg hover:bg-[#00352c] transition-all duration-300 text-lg font-semibold tracking-wide w-full shadow-md cursor-pointer "
              onClick={handleAddToBasket}
            >
              
              Command
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}