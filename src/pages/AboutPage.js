// FILE: src/pages/AboutPage.js

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

// می‌توانید لینک عکس خود را در اینجا قرار دهید
const profileImageUrl = 'https://placehold.co/150x150/A3E635/4D7C0F?text=ME';

export const AboutPage = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    {/* تصویر پروفایل */}
                    <div className="flex-shrink-0">
                        <img
                            src={profileImageUrl}
                            alt="تصویر پروفایل توسعه‌دهنده"
                            className="w-40 h-40 rounded-full object-cover border-4 border-green-200 shadow-lg"
                        />
                    </div>
                    {/* معرفی اولیه */}
                    <div className="text-center md:text-right">
                        <p className="text-lg text-green-600 font-semibold">توسعه‌دهنده وب و اپلیکیشن</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
                            Ali Asadzadeh
                        </h1>
                        <p className="text-gray-500 mt-4 max-w-2xl">
                            توسعه‌دهنده‌ای اهل ماکو، مشتاق برای خلق ارزش و حل مسائل پیچیده با استفاده از فناوری.
                        </p>
                    </div>
                </div>

                {/* بخش متن اصلی */}
                <div className="max-w-4xl mx-auto mt-16 text-gray-700 leading-loose space-y-6 text-justify">
                    <p>
                        سلام! من یک توسعه‌دهنده وب و اپلیکیشن اهل ماکو و مشتاق به ساخت راه‌حل‌های دیجیتال کارآمد و خلاقانه هستم. سفر من در دنیای برنامه‌نویسی از کنجکاوی برای حل مسائل پیچیده با استفاده از فناوری آغاز شد و امروز، به یک متخصص در اکوسیستم قدرتمند جاوااسکریپت (JavaScript) و ابزارهای پیرامون آن تبدیل شده‌ام.
                    </p>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-r-4 border-green-500 pr-4">چرا این پروژه را ساختم؟</h2>
                        <p>
                            به عنوان فردی که در این منطقه بزرگ شده‌ام، همیشه به دنبال راهی برای کمک به شکوفایی ظرفیت‌های اقتصادی و فرهنگی زادگاهم بوده‌ام. این پروژه (بازارچه آنلاین محصولات محلی ماکو) چیزی فراتر از یک نمونه کار فنی است. این پروژه، دیدگاه من را به نمایش می‌گذارد: اینکه چگونه می‌توان با ابزارهای مدرن، پلی میان تولیدکنندگان محلی و بازارهای گسترده‌تر ساخت. هدف من نشان دادن این بود که فناوری می‌تواند به طور مستقیم به رشد اقتصادی منطقه آزاد ماکو کمک کرده و داستان‌های ناگفته آن را به گوش دیگران برساند.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-3 border-r-4 border-green-500 pr-4">نگاهی به جعبه ابزار من</h2>
                        <p className="mb-2">من به مجموعه‌ای از فناوری‌های مدرن و کاربردی برای ساخت محصولات دیجیتال از ایده تا استقرار تسلط دارم:</p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>**Front-End:** ساخت رابط‌های کاربری سریع، زیبا و واکنش‌گرا با **React**, **Next.js** و **Tailwind CSS**.</li>
                            <li>**Back-End:** توسعه APIهای امن و مقیاس‌پذیر با استفاده از **Node.js** و **Express.js**.</li>
                            <li>**Mobile:** تولید اپلیکیشن‌های موبایل چندسکویی (Cross-platform) برای iOS و Android با **React Native**.</li>
                            <li>**ابزارها و DevOps:** مدیریت نسخه با **Git**، کانتینرسازی برنامه‌ها با **Docker** و آشنایی با فرآیندهای استقرار.</li>
                        </ul>
                    </div>
                </div>

                {/* بخش تماس و لینک‌ها */}
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold text-gray-800">بیایید صحبت کنیم!</h2>
                    <p className="text-gray-600 mt-2 mb-6">از بررسی این پروژه سپاسگزارم و برای گفتگو در مورد فرصت‌های همکاری آماده‌ام.</p>
                    <div className="flex justify-center items-center gap-6">
                        <a href="mailto:aliasadzade13811004@gmail.com" className="text-gray-500 hover:text-green-600 transition-colors">
                            <Mail size={32} />
                        </a>
                        <a href="https://github.com/kking81400" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 transition-colors">
                            <Github size={32} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};
