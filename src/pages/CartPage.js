// =======================================================================
// FILE: src/pages/CartPage.js
// =======================================================================
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export const CartPage = ({ navigate }) => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">سبد خرید شما خالی است</h1>
                <p className="text-gray-600 mb-8">به فروشگاه بروید و محصولات مورد علاقه خود را اضافه کنید.</p>
                <button onClick={() => navigate('/products')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">رفتن به فروشگاه</button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">سبد خرید</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between items-center border-b pb-4 mb-4">
                        <h2 className="text-xl font-semibold">محصولات</h2>
                        <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1">
                            <Trash2 className="w-4 h-4" />حذف همه
                        </button>
                    </div>
                    {cartItems.map(item => (
                        <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b last:border-b-0">
                            <div className="flex items-center gap-4 mb-4 sm:mb-0">
                                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover" />
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.price.toLocaleString('fa-IR')} تومان</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-md">
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2"><Plus className="w-4 h-4" /></button>
                                    <span className="px-4">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2"><Minus className="w-4 h-4" /></button>
                                </div>
                                <p className="font-semibold w-28 text-center">{(item.price * item.quantity).toLocaleString('fa-IR')} تومان</p>
                                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500"><Trash2 className="w-5 h-5" /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md h-fit">
                    <h2 className="text-xl font-bold mb-4 border-b pb-4">خلاصه سفارش</h2>
                    <div className="flex justify-between mb-2 text-gray-600"><span>مجموع</span><span>{cartTotal.toLocaleString('fa-IR')} تومان</span></div>
                    <div className="flex justify-between mb-4 text-gray-600"><span>ارسال</span><span className="text-green-600">رایگان</span></div>
                    <div className="flex justify-between font-bold text-lg border-t pt-4"><span>قابل پرداخت</span><span>{cartTotal.toLocaleString('fa-IR')} تومان</span></div>
                    <button onClick={() => navigate('/checkout')} className="w-full bg-green-600 text-white mt-6 py-3 rounded-lg font-bold hover:bg-green-700 transition">ادامه خرید</button>
                </div>
            </div>
        </div>
    );
};
