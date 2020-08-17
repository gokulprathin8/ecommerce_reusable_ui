import React from "react";

const ImageHelper = ({product}) => {
    const imageUrl = product ? product.image : `https://images.unsplash.com/photo-1591186448336-d859f60f94b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1324&q=80`
    
    return (
        <div className="rounded border border-success p-2">
            <img src={imageUrl} style={{maxHeight:"100%", maxWidth: "100%"}} className="mb-3 rounded" alt="Image" />
        </div>
    )
}

export default ImageHelper;