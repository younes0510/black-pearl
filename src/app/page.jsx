export default function Home() {
    return (
        <div className="bg-[#1d232a]">
            <div className="relative">
                <img src="black.jpg" className="w-full h-[550px] object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-7xl font-bold ">Black Pearl</h1>
                    <button className="mt-4 px-4 py-2 bg-white text-black rounded cursor-pointer">
                        Decouvrir
                    </button>
                </div>
            </div>

            <div className="text-center text-white text-3xl my-7 font-bold">
                <h1>NOTRE MENU</h1>

                <div className="grid grid-cols-3"></div>
            </div>
        </div>
    );
}
