import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + item.id)}
        >
            <div className="thumbnail">
                <img
                    src={
                        item.main_image
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{item.title}</span>
                <span className="price">{item.price}</span>
            </div>
        </div>
    );
};

export default Product;
