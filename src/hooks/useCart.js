// =======================================================================
// FILE: src/hooks/useCart.js
// =======================================================================
import { useContext } from 'react';
 import { CartContext } from '../context/CartContext';
// For this single-file example, we just re-declare it.
// export const useCart = () => useContext(CartContext);
// Since we are in a single file, we'll redefine the hook here, but in a real project, it would be a separate file.
export const useCart = () => useContext(CartContext);
