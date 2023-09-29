import { useEffect, useId, useState } from 'react';
import { activeRoute } from '../../utils/stores/app-store';
import ProductGallery from '../../utils/components/product-gallery/ProductGallery';
import ProductCard from '../../utils/components/product-card/ProductCard';

function Products() {
  const [productList] = useState([
    {
      "_id": useId(),
      "icon": "eco",
      "name": "Xerula radicata L1",
      "category": "Agricultural",
      "description": "Xerula radicata, commonly known as the deep root mushroom or the rooting shank, is a widespread agaric readily identified by its deeply rooted stalk",
      "pricing": "Contact",
    },
    {
      "_id": useId(),
      "icon": "eco",
      "name": "Xerula radicata L2",
      "category": "Agricultural",
      "description": "Xerula radicata, commonly known as the deep root mushroom or the rooting shank, is a widespread agaric readily identified by its deeply rooted stalk",
      "pricing": "Contact",
    },
    {
      "_id": useId(),
      "icon": "eco",
      "name": "Xerula radicata L3",
      "category": "Agricultural",
      "description": "Xerula radicata, commonly known as the deep root mushroom or the rooting shank, is a widespread agaric readily identified by its deeply rooted stalk",
      "pricing": "Contact",
    },
    {
      "_id": useId(),
      "icon": "eco",
      "name": "IT Solution",
      "category": "Software",
      "description": "Management of agricultural operations using software solutions",
      "pricing": "Contact",
    },
  ]);

  useEffect(() => {
    activeRoute('/products');
    console.log('Products Page Did Mount');
  }, []);

  useEffect(() => {
    return () => {
      console.log('Products Page Will UnMount');
    };
  }, []);

  return (
    <>
      <div className="products-container">
        <ProductGallery />
        <div className="product-items">
          {productList.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
