
const FilterPrice = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="flex flex-col space-y-2">
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$0 - $1000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$1000 - $2000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$5000 - $10000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$11000 - $20000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$21000 - $30000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">$31000 - $50000</button>
                <button className="text-left px-2 py-1 text-sm rounded hover:bg-gray-100">Above $50000</button>
            </div>
        </div>
    );
};

export default FilterPrice;
