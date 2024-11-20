
const FilterColor = () => {
    return (
        <div className="mb-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex flex-wrap items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer mr-2 mb-2 hover:ring-2 ring-white"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer mr-2 mb-2 hover:ring-2 ring-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer mr-2 mb-2 hover:ring-2 ring-white"></div>
            </div>
        </div>
    );
};

export default FilterColor;
