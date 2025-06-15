// =======================================================================
// FILE: src/components/common/FilterSidebar.js
// =======================================================================
export const FilterSidebar = ({ categories, filters, setFilters }) => (
    <aside className="w-full md:w-64 lg:w-72 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">فیلترها</h3>
        <div className="mb-6">
            <h4 className="font-semibold mb-2">دسته بندی</h4>
            <ul>
                <li onClick={() => setFilters(p => ({ ...p, category: 'همه' }))} className={`cursor-pointer p-2 rounded-md ${filters.category === 'همه' ? 'bg-green-100 text-green-800 font-bold' : 'hover:bg-gray-100'}`}>همه</li>
                {categories.map(cat => (
                    <li key={cat} onClick={() => setFilters(p => ({ ...p, category: cat }))} className={`cursor-pointer p-2 rounded-md ${filters.category === cat ? 'bg-green-100 text-green-800 font-bold' : 'hover:bg-gray-100'}`}>
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
        <div className="mb-6">
            <h4 className="font-semibold mb-2">محدوده قیمت</h4>
            <input type="range" min="10000" max="3000000" step="10000" value={filters.maxPrice} onChange={e => setFilters(p => ({ ...p, maxPrice: Number(e.target.value) }))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>۱۰,۰۰۰</span>
                <span>{filters.maxPrice.toLocaleString('fa-IR')} تومان</span>
            </div>
        </div>
    </aside>
);
