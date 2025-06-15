import React from 'react';
// FIX: ProductCard component needs to be imported
import { ProductCard } from '../components/common/ProductCard';
// FIX: initialProducts data needs to be imported
import { initialProducts } from '../data/mockData';

export const HomePage = ({ navigate }) => (
    <div>
        <section className="bg-green-50 h-96 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">طعم اصیل، هنر ناب</h1>
                <p className="text-lg text-gray-600 mb-8">محصولات محلی و صنایع دستی منطقه آزاد ماکو</p>
                <button onClick={() => navigate('/products')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">مشاهده محصولات</button>
            </div>
        </section>
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">پرفروش‌ترین‌ها</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* این دو متغیر حالا تعریف شده هستند */}
                {initialProducts.slice(0, 4).map(p => (<ProductCard key={p.id} product={p} navigate={navigate} />))}
            </div>
        </section>
    </div>
);
