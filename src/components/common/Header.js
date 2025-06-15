// =======================================================================
// FILE: src/components/common/Header.js (نسخه اصلاح‌شده و واکنش‌گرا)
// =======================================================================
import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const Header = ({ navigate }) => {
    // State برای مدیریت باز یا بسته بودن منوی موبایل
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount } = useCart();

    // یک تابع کمکی برای بستن منو بعد از کلیک روی لینک‌ها
    const handleNavigate = (path) => {
        navigate(path);
        setIsMenuOpen(false); // منوی موبایل را می‌بندد
    };

    return (
        // با اضافه کردن `relative` به این div، منوی موبایل به درستی زیر آن قرار می‌گیرد
        <header className="bg-white shadow-md sticky top-0 z-40">
            {/* نوار بالایی */}
            <div className="bg-green-800 text-white text-xs text-center py-1 px-4">
                <p>ارسال رایگان برای سفارشات بالای ۵۰۰ هزار تومان</p>
            </div>

            {/* هدر اصلی */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* لوگو */}
                    <div className="text-2xl font-bold text-green-700 cursor-pointer" onClick={() => handleNavigate('/')}>
                        بازارچه ماکو
                    </div>

                    {/* منوی دسکتاپ (فقط در صفحات بزرگ نمایش داده می‌شود) */}
                    <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
                        <a onClick={() => handleNavigate('/')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">خانه</a>
                        <a onClick={() => handleNavigate('/products')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">محصولات</a>
                        <a onClick={() => handleNavigate('/about')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">درباره ما</a>
                    </nav>

                    {/* آیکون‌ها و دکمه‌های سمت راست */}
                    <div className="flex items-center space-x-4 space-x-reverse">
                        {/* سبد خرید */}
                        <div className="relative cursor-pointer" onClick={() => handleNavigate('/cart')}>
                            <ShoppingCart className="text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* دکمه ورود (نسخه دسکتاپ) */}
                        <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">ورود</button>

                        {/* دکمه منوی همبرگری (فقط در موبایل نمایش داده می‌شود) */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
                                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* منوی بازشونده موبایل */}
            {/* این منو فقط زمانی نمایش داده می‌شود که isMenuOpen برابر true باشد */}
            {isMenuOpen && (
                <nav className="md:hidden bg-white shadow-lg w-full absolute top-full left-0">
                    <div className="flex flex-col items-center p-4 space-y-2">
                        <a onClick={() => handleNavigate('/')} className="text-gray-700 hover:bg-green-50 w-full text-center py-3 rounded-md transition cursor-pointer">خانه</a>
                        <a onClick={() => handleNavigate('/products')} className="text-gray-700 hover:bg-green-50 w-full text-center py-3 rounded-md transition cursor-pointer">محصولات</a>
                        <a onClick={() => handleNavigate('/about')} className="text-gray-700 hover:bg-green-50 w-full text-center py-3 rounded-md transition cursor-pointer">درباره ما</a>
                        <button className="w-full mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">ورود</button>
                    </div>
                </nav>
            )}
        </header>
    );
};
