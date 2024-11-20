import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import FilterColor from './FilterColor';

const FilterSidebar = () => {
    return (
        <div className="w-64 bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-4 ml-16">Filters</h2>
            <button className="mb-8 ml-8 px-6 text-gray-500 border border-gray-300 rounded-full hover:bg-gray-100">
    Clear Filter
</button>

            <FilterCategory />
            <FilterPrice />
            <FilterColor />
        </div>
    );
};

export default FilterSidebar;
