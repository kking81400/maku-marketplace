// =======================================================================
// FILE: src/data/mockData.js
// =======================================================================
export const sellers = {
    101: { name: 'زنبوردار محلی - آقای احمدی', avatar: 'https://placehold.co/100x100/A3E635/4D7C0F?text=A' },
    102: { name: 'بافندگی خاتون', avatar: 'https://placehold.co/100x100/F9A8D4/9D174D?text=K' },
    103: { name: 'نان محلی مادر', avatar: 'https://placehold.co/100x100/FDBA74/C2410C?text=M' },
    104: { name: 'صنایع دستی آرارات', avatar: 'https://placehold.co/100x100/A5B4FC/312E81?text=A' },
};

export const initialProducts = [
    { id: 1, name: 'عسل طبیعی کوهستان', sellerId: 101, price: 350000, category: 'مواد غذایی', image: 'https://placehold.co/600x400/FBBF24/854D0E?text=Honey', rating: 4.8, reviews: 25, description: 'عسل کاملاً طبیعی برداشت شده از دامنه‌های سرسبز کوه آرارات، با طعم و عطری بی‌نظیر.', stock: 50 },
    { id: 2, name: 'گلیم دست‌بافت سنتی', sellerId: 102, price: 1250000, category: 'صنایع دستی', image: 'https://placehold.co/600x400/F472B6/9D174D?text=Rug', rating: 4.9, reviews: 18, description: 'گلیم بافته شده با نخ‌های پشمی طبیعی و رنگ‌های گیاهی، هنر دست زنان منطقه ماکو.', stock: 10 },
    { id: 3, name: 'نان محلی روغنی (یاغلی چورک)', sellerId: 103, price: 45000, category: 'نان و شیرینی', image: 'https://placehold.co/600x400/FB923C/B45309?text=Bread', rating: 4.7, reviews: 42, description: 'نان سنتی و خوشمزه منطقه، پخته شده در تنورهای خانگی با بهترین مواد اولیه.', stock: 100 },
    { id: 4, name: 'ظروف سفالی منقوش', sellerId: 104, price: 180000, category: 'صنایع دستی', image: 'https://placehold.co/600x400/93C5FD/1E3A8A?text=Pottery', rating: 4.6, reviews: 12, description: 'ظروف سفالی دست‌ساز با نقوش الهام گرفته از طبیعت و تاریخ منطقه.', stock: 30 },
    { id: 5, name: 'خشکبار و میوه خشک مخلوط', sellerId: 101, price: 280000, category: 'مواد غذایی', image: 'https://placehold.co/600x400/D97706/9A3412?text=Nuts', rating: 4.5, reviews: 33, description: 'مجموعه‌ای از بهترین میوه‌های خشک و آجیل محلی، سالم و مقوی.', stock: 40 },
    { id: 6, name: 'جاجیم رنگارنگ', sellerId: 102, price: 950000, category: 'صنایع دستی', image: 'https://placehold.co/600x400/EC4899/831843?text=Jajim', rating: 4.8, reviews: 9, description: 'جاجیم زیبا و با دوام، مناسب برای دکوراسیون منزل با حس و حال سنتی.', stock: 15 },
    { id: 7, name: 'کلوچه سنتی گردویی', sellerId: 103, price: 85000, category: 'نان و شیرینی', image: 'https://placehold.co/600x400/F59E0B/B45309?text=Cookie', rating: 4.9, reviews: 51, description: 'کلوچه‌های ترد و تازه با مغز گردوی فراوان، یک میان‌وعده عالی.', stock: 80 },
    { id: 8, name: 'تخته نرد خاتم کاری', sellerId: 104, price: 2500000, category: 'صنایع دستی', image: 'https://placehold.co/600x400/60A5FA/1E40AF?text=Backgammon', rating: 5.0, reviews: 7, description: 'تخته نرد دست‌ساز با هنر خاتم‌کاری اصیل، یک اثر هنری و کاربردی.', stock: 5 },
];
