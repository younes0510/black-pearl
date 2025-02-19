export function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-32">
                <div className="flex-1">
                    <a className=" text-xl cursor-pointer">
                        <img
                            className="h-20 w-20 border rounded-full"
                            src="the-black-pearl-restaurant.jpg"
                            alt=""
                            href="#"
                        />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Conctact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
