// =======================================================================
// FILE: src/pages/NotFoundPage.js
// =======================================================================
export const NotFoundPage = ({ navigate }) => (
    <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">۴۰۴</h1>
        <h2 className="text-3xl font-bold mb-4">صفحه یافت نشد</h2>
        <button onClick={() => navigate('/')} className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold">بازگشت به خانه</button>
    </div>
);
