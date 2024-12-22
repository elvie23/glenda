

const products = [
  { id: 1, name: "Gold Necklace", image: "/image/a1.jpg", price: "₱199" },
  { id: 2, name: "Two Balls Gold Necklace", image: "/image/a2.jpg", price: "₱249" },
  { id: 3, name: "Silver Ring", image: "/image/a4.jpg", price: "₱89" },
  { id: 4, name: "Gold Ring", image: "/image/a3.jpg", price: "₱89" },
  { id: 5, name: "Round Necklace", image: "/image/b7.jpg", price: "₱120" },
  { id: 6, name: "Heart Necklace", image: "/image/b6 gold.avif", price: "₱199" },
  { id: 7, name: "Gold Heart Necklace", image: "/image/b9.jpg", price: "₱199" },
  { id: 8, name: "Stainless steel U Link Bracelet", image: "/image/c1.jpg", price: "₱99" },
  { id: 9, name: "Premium Small VCA Bracelet", image: "/image/c2.jpg", price: "₱99" },
];

const Product = () => {
  return (
    <section
      id="shop"
      className="py-16 bg-cover bg-center bg-[url('/public/image/back1.jpg')]"
    >
      <div className="max-w-7xl mx-auto text-center text-black">
        <h2 className="text-3xl font-bold mb-8">New Products</h2>
        <p className="text-lg mb-8">Explore stunning designs crafted to celebrate your unique story.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray bg-opacity-50 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <button className="mt-4 bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
