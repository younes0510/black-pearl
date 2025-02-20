export default function Contact() {
    return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg font-sans my-20">
            <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 uppercase mb-10 text-center">
                Contact Us
            </h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-black">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-2 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-2 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-lg font-medium text-black ">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="mt-2 p-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black"
                        required
                    ></textarea>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-6 bg-[#002d18] text-white py-3 px-6 rounded-lg hover:bg-[#0d251a] transition-all duration-300 text-lg font-semibold tracking-wide shadow-md"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
}