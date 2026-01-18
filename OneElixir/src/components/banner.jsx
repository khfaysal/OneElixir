export default function Banner() {
    return (
        <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 bg-gradient-to-r from-brandDark to-brandBlue text-white">

            {/* Text Content */}
            <div>
                <h2 className="text-5xl font-bold leading-tight">
                    Fall in love with <br />
                    Our Signature <span className="text-brandGold">Perfumes</span>
                </h2>

                <p className="mt-6 text-gray-300 max-w-md">
                    Discover the perfect fragrance for you with our wide selection of premium perfumes.
                </p>

                <button className="mt-8 bg-brandGold text-black px-8 py-3 rounded-full font-semibold">
                    Shop Now
                </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
                    alt="Perfume model"
                    className="rounded-2xl max-w-sm shadow-xl"
                />
            </div>
        </section>
    );
}
