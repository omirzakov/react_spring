import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const match = useParams();
    const id = match.id;
    

    return (
        <div>
            Detail { id }
        </div>
    );
}
export default ProductDetail;