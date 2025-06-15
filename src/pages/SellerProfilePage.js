// =======================================================================
// FILE: src/pages/SellerProfilePage.js
// =======================================================================
import { useMemo } from 'react';
import { sellers, initialProducts } from '../data/mockData';
import { ProductCard } from '../components/common/ProductCard';

export const SellerProfilePage = ({ navigate, sellerId }) => {
    const seller = useMemo(() => sellers[parseInt(sellerId)], [sellerId]);
    const sellerProducts = useMemo(() => initialProducts.filter(p => p.sellerId === parseInt(sellerId)), [sellerId]);

    if (!seller) {
        return <div className="text-center py-20">فروشنده یافت نشد.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8 mb-8">
                <img src={seller.avatar} alt={seller.name} className="w-32 h-32 rounded-full border-4 border-green-200" />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{seller.name}</h1>
                    <p className="text-gray-500 mt-2">یکی از تولیدکنندگان معتبر منطقه آزاد ماکو</p>
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-6">محصولات این فروشنده</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {sellerProducts.map(p => (<ProductCard key={p.id} product={p} navigate={navigate} />))}
            </div>
        </div>
    );
};
