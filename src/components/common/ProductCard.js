import React from 'react';
// FIX: The ShoppingCart icon needs to be imported
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const ProductCard = ({ product, navigate }) => {
    const { addToCart } = useCart();
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* ... بقیه کد بدون تغییر باقی می‌ماند ... */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (<Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />))}
                    <span className="text-xs text-gray-500 mr-2">({product.reviews} نظر)</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-green-600">{product.price.toLocaleString('fa-IR')} تومان</p>
                    <button onClick={() => addToCart(product)} className="bg-green-100 text-green-700 p-2 rounded-full hover:bg-green-200 transition">
                        {/* این کامپوننت حالا تعریف شده است */}
                        <ShoppingCart className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
