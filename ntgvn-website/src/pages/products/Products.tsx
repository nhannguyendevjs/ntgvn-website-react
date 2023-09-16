
import { activeRoute } from '../../utils/stores/app-store.js';

function Products() {
    console.log('Home Page activated');

    activeRoute('home');

    return (
        <>
            <div>Products</div>
        </>
    );
}

export default Products;
