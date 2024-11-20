const FilterCategory = () => {
    return (
        <div className="mb-4">
            
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="flex flex-col space-y-2">
                <button className="flex justify-between items-center text-left px-2 py-1 text-sm rounded hover:bg-gray-100">
                    <span>Laptops</span>
                    <span className="text-gray-500">(10)</span>
                </button>
                <button className="flex justify-between items-center text-left px-2 py-1 text-sm rounded hover:bg-gray-100">
                    <span>Desktop PCs</span>
                    <span className="text-gray-500">(5)</span>
                </button>
                <button className="flex justify-between items-center text-left px-2 py-1 text-sm rounded hover:bg-gray-100">
                    <span>All-in-One PCs</span>
                    <span className="text-gray-500">(8)</span>
                </button>
            </div>
            <button className="mt-4 text-blue-600 text-sm font-semibold hover:underline">
                Clear Filter
            </button>
        </div>
    );
};

export default FilterCategory;
