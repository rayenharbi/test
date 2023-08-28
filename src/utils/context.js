import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const location = useLocation();

    useEffect(() => {
        // Load cart items from local storage on component mount
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCartItems);
    }, []);

    useEffect(() => {
        // Save cart items to local storage whenever they change
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        let count = 0;
        cartItems?.map((item) => (count += item.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.price * item.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

    const clearCart = () => {
        setCartItems([]);
    };

    const handleAddToCart = (product, quantity, size) => {
        const newItem = { ...product, quantity, size };
        let items = [...cartItems];
        let index = items.findIndex((p) => p.id === product.id && p.size === size);
        if (index !== -1) {
            items[index] = { ...items[index], quantity: items[index].quantity + quantity };
        } else {
            items.push(newItem);
        }
        setCartItems(items);
    };

    const handleRemoveFromCart = (product) => {
        let items = [...cartItems];
        items = items?.filter((p) => !(p.id === product.id && p.size === product.size));
        setCartItems(items);
    };

    const handleCartProductQuantity = (type, product) => {
        let items = [...cartItems];
        let index = items?.findIndex((p) => p.id === product.id && p.size === product.size);
        if (type === "inc") {
            items[index].quantity += 1;
        } else if (type === "dec") {
            if (items[index].quantity === 1) return;
            items[index].quantity -= 1;
        }
        setCartItems(items);
    };

    return (
        <Context.Provider
            value={{
                products,
                setProducts,
                categories,
                setCategories,
                cartItems,
                setCartItems,
                handleAddToCart,
                cartCount,
                handleRemoveFromCart,
                showCart,
                setShowCart,
                handleCartProductQuantity,
                cartSubTotal,
                clearCart,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
