import { useEffect } from 'react';
import { activeRoute } from '../../utils/stores/app-store';

function Products() {
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
      <div>Products</div>
    </>
  );
}

export default Products;
