export default function About() {
    return (
        <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg font-sans my-20">
            <h1 className="text-4xl font-extrabold tracking-wide text-gray-900 uppercase mb-10 text-center">
                About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to The Black Pearl Restaurant, where culinary excellence meets a cozy and inviting atmosphere. Our team of passionate chefs uses the freshest ingredients to create a variety of delectable dishes that cater to all taste buds. Whether you're here for a casual meal or a special occasion, we strive to provide an unforgettable dining experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Our story began in 2025, with a vision to bring unique and flavorful dishes to our community. We believe in the power of good food to bring people together, and our mission is to create a welcoming environment where everyone feels like family. Thank you for choosing to dine with us, and we look forward to serving you.
            </p>
            <div className="mt-10 flex justify-center">
                <img
                    src="black-pearl.jpg"
                    alt="The Black Pearl Restaurant"
                    className="rounded-lg shadow-md w-3/4"
                />
            </div>

            
        </div>
    );
}