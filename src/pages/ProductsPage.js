// =======================================================================
// FILE: src/pages/ProductsPage.js
// =======================================================================
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from '../components/common/ProductCard';
import { FilterSidebar } from '../components/common/FilterSidebar';
import { initialProducts } from '../data/mockData';

export const ProductsPage = ({ navigate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({ category: 'همه', maxPrice: 3000000, sortBy: 'newest' });
    const categories = useMemo(() => ['همه', ...new Set(initialProducts.map(p => p.category))], []);
    const filteredProducts = useMemo(() => {
        return initialProducts
            .filter(p => (p.name.toLowerCase().includes(searchTerm.toLowerCase())) && (filters.category === 'همه' || p.category === filters.category) && (p.price <= filters.maxPrice))
            .sort((a, b) => {
                if (filters.sortBy === 'price-asc') return a.price - b.price;
                if (filters.sortBy === 'price-desc') return b.price - a.price;
                if (filters.sortBy === 'rating') return b.rating - a.rating;
                return b.id - a.id;
            });
    }, [searchTerm, filters]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">همه محصولات</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <FilterSidebar categories={categories.slice(1)} filters={filters} setFilters={setFilters} />
                <main className="flex-1">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="relative w-full sm:w-auto flex-grow">
                            <input type="text" placeholder="جستجوی محصول..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500" />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        </div>
                        <div className="w-full sm:w-auto">
                            <select value={filters.sortBy} onChange={e => setFilters(p => ({ ...p, sortBy: e.target.value }))} className="p-2 border border-gray-300 rounded-md w-full">
                                <option value="newest">جدیدترین</option>
                                <option value="rating">محبوب‌ترین</option>
                                <option value="price-asc">ارزان‌ترین</option>
                                <option value="price-desc">گران‌ترین</option>
                            </select>
                        </div>
                    </div>
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(p => (<ProductCard key={p.id} product={p} navigate={navigate} />))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-gray-50 rounded-lg"><p className="text-xl text-gray-500">محصولی یافت نشد.</p></div>
                    )}
                </main>
            </div>
        </div>
    );
};
