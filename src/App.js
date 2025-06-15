// =======================================================================
// FILE: src/App.js (This is the main router component)
// =======================================================================
import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { SellerProfilePage } from './pages/SellerProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutPage } from './pages/AboutPage';
const AppRouter = () => {
  const getRouteFromHash = () => window.location.hash.substring(1) || '/';
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => { window.location.hash = path; };

  const renderPage = () => {
    const productDetailMatch = route.match(/\/product\/(\d+)/);
    if (productDetailMatch) return <ProductDetailPage navigate={navigate} productId={productDetailMatch[1]} />;

    const sellerProfileMatch = route.match(/\/seller\/(\d+)/);
    if (sellerProfileMatch) return <SellerProfilePage navigate={navigate} sellerId={sellerProfileMatch[1]} />;

    switch (route) {
      case '/': return <HomePage navigate={navigate} />;
      case '/products': return <ProductsPage navigate={navigate} />;
      case '/cart': return <CartPage navigate={navigate} />;
      case '/checkout': return <CheckoutPage navigate={navigate} />;
      case '/about': return <AboutPage />;
      default: return <NotFoundPage navigate={navigate} />;
    }
  };

  return (
      <div className="flex flex-col min-h-screen" dir="rtl" lang="fa">
        <Header navigate={navigate} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer />
      </div>
  );
};

export default AppRouter;
