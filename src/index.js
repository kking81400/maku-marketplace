// =======================================================================
// FILE: src/index.js (The final entry point of the application)
// =======================================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './App';
import { CartProvider } from './context/CartContext';
// Create a file src/output.css and add the following line:

// Then uncomment the line below:
import './output.css';


// This code should replace the entire content of your src/index.js file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CartProvider>
            <AppRouter />
        </CartProvider>
    </React.StrictMode>
);

// This is the combined file for the immersive environment.
// In your local project, you'd have the above files separated.
// The default export for this environment is a combination.
const CombinedApp = () => {
    const GlobalStyles = () => (<style>{`@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700;800;900&display=swap'); body { font-family: 'Vazirmatn', sans-serif; direction: rtl; background-color: #f8fafc; }`}</style>);

    // Since we can't use the real index.js logic here, we simulate it.
    return (
        <React.StrictMode>
            <CartProvider>
                <GlobalStyles />
                <AppRouter />
            </CartProvider>
        </React.StrictMode>
    );
}

// The final default export for the immersive environment.
// export default CombinedApp;
// The above line is commented out because create-react-app expects App.js to export a component, not index.js to have a default export.
// In the immersive environment, we need one final export.
export default function App() {
    return <CombinedApp />;
}
