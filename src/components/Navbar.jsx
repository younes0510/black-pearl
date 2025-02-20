import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setItems } from "@/lib/basketSlice";

export function Navbar() {
    const dispatch = useDispatch();
    const basketLength = useSelector((state) => state.basket.plats.length);

    useEffect(() => {
        const items = localStorage.getItem("items");
        if (items) {
            dispatch(setItems(JSON.parse(items)));
        }
    }, [dispatch]);

    return (
        <div className="flex items-center justify-between bg-base-100 shadow-sm px-14 py-5">
            <div>
                <Link href={'/'}>
                    <img
                        className="h-16 w-16 border rounded-full cursor-pointer"
                        src="the-black-pearl-restaurant.jpg"
                        alt="The Black Pearl Restaurant"
                    />
                </Link>
            </div>
            <div>
                <ul className="flex items-center justify-between gap-10">
                    <li>
                        <Link href={"/about"} className="text-xl hover:underline transition-colors duration-300">About Us</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="text-xl hover:underline transition-colors duration-300">Contact Us</Link>
                    </li>
                    <li className="relative">
                        <Link href={"/commande"} className="text-xl hover:underline transition-colors duration-300">Commande</Link>
                        {basketLength > 0 && (
                            <span className="absolute bottom-5 left-24 h-5 w-5 bg-red-600 text-white text-xs flex items-center justify-center rounded-full">
                                {basketLength}
                            </span>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}