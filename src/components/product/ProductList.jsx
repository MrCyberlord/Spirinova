import ProductCard from './ProductCard';
import Laptop1 from '../../assets/Laptop1.jpg';
import Laptop2 from '../../assets/Laptop2.jpg';
import Laptop3 from '../../assets/Laptop3.jpg';

const ProductList = () => {
    const baseProducts = [
        { 
            id: 1, 
            name: 'Laptop 1', 
            description: 'High-performance laptop for gaming and professional use.', 
            price: '999.00', 
            image: Laptop1, 
            stock: 5 
        },
        { 
            id: 2, 
            name: 'Laptop 2', 
            description: 'Compact and lightweight laptop for everyday use.', 
            price: '699.00', 
            image: Laptop2, 
            stock: 3 
        },
        { 
            id: 3, 
            name: 'Laptop 3', 
            description: 'Durable and powerful, perfect for professionals.', 
            price: '849.00', 
            image: Laptop3, 
            stock: 4 
        }
    ];

    const products = Array.from({ length: 9 }, (_, i) => 
        baseProducts.map((product) => ({
            ...product,
            id: product.id + i * baseProducts.length, 
        }))
    ).flat();

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
