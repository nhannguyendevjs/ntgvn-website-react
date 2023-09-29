import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const [product] = useState(props.product);

  return (
    <>
      <div className="product-card-container animate__animated animate__fadeIn animate__slow">
        <div className="__icon">
          <span className='material-icons'>{product.icon}</span>
        </div>

        <div className="__name">{product.name}</div>

        <div className="__description line-clamp-4">" {product.description} "</div>

        <div className="__details">
          <div className="__category">
            <span>Category</span>
            <div>{product.category}</div>
          </div>

          <div className="__pricing">
            <span>Pricing</span>
            <div className="text-green-500 font-semibold cursor-pointer" >
              <Link to="/contact">{product.pricing}</Link>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default ProductCard;
