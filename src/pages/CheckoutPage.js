// =======================================================================
// FILE: src/pages/CheckoutPage.js
// =======================================================================
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

export const CheckoutPage = ({ navigate }) => {
    const { cartTotal, clearCart } = useCart();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOrderPlaced(true);
        clearCart();
    };

    if (isOrderPlaced) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-green-700 mb-4">سفارش شما ثبت شد!</h1>
                <p className="text-gray-600 mb-8">از خرید شما سپاسگزاریم.</p>
                <button onClick={() => navigate('/')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold">بازگشت به خانه</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">پرداخت</h1>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">اطلاعات ارسال</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">نام</label><input type="text" required className="w-full p-2 border border-gray-300 rounded-md" /></div>
                        <div><label className="block text-sm font-medium text-gray-700 mb-1">نام خانوادگی</label><input type="text" required className="w-full p-2 border border-gray-300 rounded-md" /></div>
                        <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">آدرس</label><textarea rows="3" required className="w-full p-2 border border-gray-300 rounded-md"></textarea></div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-xl font-bold mb-4">اطلاعات پرداخت</h2>
                    <p className="text-sm text-gray-600 mb-4">این یک نسخه دمو است. نیازی به اطلاعات کارت نیست.</p>
                    <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                        <span>مبلغ نهایی</span><span>{cartTotal.toLocaleString('fa-IR')} تومان</span>
                    </div>
                    <button type="submit" className="w-full bg-green-600 text-white mt-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">پرداخت و ثبت سفارش</button>
                </div>
            </form>
        </div>
    );
};
