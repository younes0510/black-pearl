import Link from "next/link";

export function Navbar() {
    return (
        <div className="flex items-center justify-between bg-base-100 shadow-sm px-14 py-5">
            <div>
                <Link href={'/'} className="cursor-pointer">
                    <img
                        className="h-16 w-16 border rounded-full"
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
                </ul>
            </div>
        </div>
    );
}