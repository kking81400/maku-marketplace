
// =======================================================================
// FILE: src/components/common/Header.js
// =======================================================================
import { Mail, Phone, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const Header = ({ navigate }) => {
    const { cartCount } = useCart();
    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <div className="bg-green-800 text-white text-xs text-center py-1 px-4">
                <p>ارسال رایگان برای سفارشات بالای ۵۰۰ هزار تومان</p>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-green-700 cursor-pointer" onClick={() => navigate('/')}>
                        بازارچه ماکو
                    </div>
                    <nav className="hidden md:flex items-center space-x-6 space-x-reverse">
                        <a onClick={() => navigate('/')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">خانه</a>
                        <a onClick={() => navigate('/products')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">محصولات</a>
                        <a onClick={() => navigate('/about')} className="text-gray-600 hover:text-green-700 transition duration-300 cursor-pointer">درباره ما</a>
                    </nav>
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
                            <ShoppingCart className="text-gray-700" />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                        <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">ورود</button>
                    </div>
                </div>
            </div>
        </header>
    );
};
