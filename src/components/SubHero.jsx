export default function SubHero() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img
                        src="the-black-pearl-restaurant.jpg"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Black Pearl</h1>
                        <p className="py-6">
                            Dive into the exquisite flavors of the sea at Black Pearl. Our
                            restaurant offers a luxurious dining experience where fresh, locally
                            sourced seafood meets culinary artistry. Inspired by the elegance of the
                            ocean, Black Pearl is the perfect destination for seafood enthusiasts
                            who crave a touch of sophistication.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
