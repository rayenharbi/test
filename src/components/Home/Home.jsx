import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    const { products, setProducts} = useContext(Context);
    const getProducts = async () => {
        try {
          const response = await fetch("http://127.0.0.1:8000/api/getProducts");
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                <Products
                    headingText="Popular Products"
                    products={products}
                />
                </div>
            </div>
        </div>
    );
};

export default Home;
