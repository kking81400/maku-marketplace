// =======================================================================
// FILE: src/pages/ProductDetailPage.js
// =======================================================================
import { useMemo } from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { initialProducts, sellers } from '../data/mockData';

export const ProductDetailPage = ({ navigate, productId }) => {
    const { addToCart } = useCart();
    const product = useMemo(() => initialProducts.find(p => p.id === parseInt(productId)), [productId]);

    if (!product) {
        return <div className="text-center py-20">محصول یافت نشد.</div>;
    }

    const seller = sellers[product.sellerId];
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                <div className="flex flex-col">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{product.name}</h1>
                    <p className="text-md text-gray-500 mb-4">دسته: {product.category}</p>
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (<Star key={i} className={`w-6 h-6 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />))}
                        <span className="text-md text-gray-600 mr-3">({product.reviews} نظر)</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed my-4">{product.description}</p>
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center gap-4 my-4 cursor-pointer hover:bg-gray-200" onClick={() => navigate(`/seller/${product.sellerId}`)}>
                        <img src={seller.avatar} alt={seller.name} className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="text-sm text-gray-500">فروشنده</p>
                            <p className="font-semibold text-gray-800">{seller.name}</p>
                        </div>
                    </div>
                    <div className="mt-auto">
                        <p className="text-3xl font-bold text-green-600 mb-6">{product.price.toLocaleString('fa-IR')} تومان</p>
                        <button onClick={() => addToCart(product)} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                            <ShoppingCart />افزودن به سبد خرید
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
