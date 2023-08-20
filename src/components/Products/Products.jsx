import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
    if (!products || !Array.isArray(products)) {
        return <div>Loading...</div> // Or some other loading indicator
    }
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className={`products ${innerPage ? "innerPage" : ""}`}>
                    {products.map((item) => (
                        <Product
                            item={item}
                        />))}
            </div>
        </div>
    );
};

export default Products;
