export function Footer() {
    return (
        <>
            <footer className="flex justify-between items-center p-10 color-white bg-black">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <img className="h-25 w-25" src="the-black-pearl-restaurant.jpg" alt="" />
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold hover:underline cursor-pointer py-6">
                        Contacts
                    </h2>
                    <ul className="flex flex-col gap-3">
                        <li>wwrgdfg</li>
                        <li>blackpearl@food.food</li>
                        <li>Everywhere</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold hover:underline cursor-pointer py-6">
                        Quick Links
                    </h2>
                    <ul className="flex flex-col gap-3">
                        <li>How it works</li>
                        <li>About</li>
                        <li>Why Choose Us</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold hover:underline cursor-pointer py-6">
                        Food Packages
                    </h2>
                    <ul className="flex flex-col gap-3">
                        <li>Detox</li>
                        <li>Balanced</li>
                        <li>Feshaan</li>
                    </ul>
                </div>
            </footer>
        </>
    );
}
