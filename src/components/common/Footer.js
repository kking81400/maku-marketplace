// =======================================================================
// FILE: src/components/common/Footer.js
// =======================================================================
 import { Mail, Phone } from 'lucide-react';

export const Footer = () => (
    <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div><h3 className="text-lg font-bold mb-4">بازارچه ماکو</h3><p className="text-gray-400 text-sm">سکویی برای عرضه محصولات محلی و صنایع دستی منطقه آزاد ماکو.</p></div>
                <div><h3 className="text-lg font-bold mb-4">لینک‌های سریع</h3><ul className="space-y-2 text-sm"><li><a href="#/rules" className="text-gray-400 hover:text-white">قوانین</a></li><li><a href="#/privacy" className="text-gray-400 hover:text-white">حریم خصوصی</a></li></ul></div>
                <div><h3 className="text-lg font-bold mb-4">تماس با ما</h3><ul className="space-y-2 text-sm text-gray-400"><li className="flex items-center"><Mail className="w-4 h-4 ml-2" /> info@makumarket.com</li><li className="flex items-center"><Phone className="w-4 h-4 ml-2" /> ۰۴۴-۱۲۳۴۵۶۷۸</li></ul></div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-500 text-sm">
                <p>&copy; ۱۴۰۳ - تمامی حقوق محفوظ است.</p>
            </div>
        </div>
    </footer>
);
