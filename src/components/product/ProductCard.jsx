

const ProductCard = ({ product }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            <p className={`mt-2 text-sm font-semibold px-5 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? 'In stock' : 'Out of stock'}
            </p>
            <div className="flex items-center justify-center h-48">
                <img className="h-40 w-auto object-contain" src={product.image} alt={product.name} />
            </div>

            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-2">{product.name}</div>
                <p className="text-gray-700 text-sm mb-2">
                    {product.description}
                </p>
                <div className="flex items-center">
                    <div className="text-yellow-500 text-sm flex">
                        <span>★ ★ ★ ★ ☆</span> 
                    </div>
                    <p className="text-gray-500 text-sm ml-2">(4 Reviews)</p>
                </div>
            </div>

            <div className="px-4 py-2">
                <p className="text-gray-500 line-through">$549.00</p> 
                <p className="font-bold text-xl text-gray-800">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
