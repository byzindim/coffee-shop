
import React from "react";
import './productBest.scss';
import ProductBestBg from '../../../img/ProductBestBg.jpg'
import CardContent from "./cardContent/cardContent";


const ProductBest = () => {
    return (
        <div className="product-best-block">
            <img className="product-best-block-bg" src={ProductBestBg} alt="product-best-block-bg" />
            <h2 className="card-content-title">hello</h2>
            <CardContent />
        </div>
    )
}
export default ProductBest;