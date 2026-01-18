const Products = [
    {
        name: "Rosewood Bliss",
        price: "$50.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10290.png",
    },
    {
        name: "Citrus Zest",
        price: "$90.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10289.png",
    },
    {
        name: "Woodland Walk",
        price: "$70.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10291.png",
    },
    {
        name: "Rosewood Bliss",
        price: "$80.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10290.png",
    },
    {
        name: "Citrus Zest",
        price: "$70.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10289.png",
    },
    {
        name: "Woodland Walk",
        price: "$100.0",
        img: "https://pngimg.com/uploads/perfume/perfume_PNG10291.png",
    },
];

export default function Products() {
    return (
        <section className="px-10 py-20 bg-brandDark text-white">
            <h3 className="text-3xl text-center text-brandGold mb-12">
                Shop Our Wide Selection of Scents
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {Products.map((item, index) => (
                    <div
                        key={index}
                        className="bg-brandBlue rounded-2xl p-6 text-center hover:scale-105 transition"
                    >
                        <img src={item.img} alt={item.name} className="h-40 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold">{item.name}</h4>
                        <p className="text-brandGold mt-2">{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
