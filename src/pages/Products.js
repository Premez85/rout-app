import {Link} from "react-router-dom";

const PRODUCT_ITEMS = [
    {id: 'p1', title: 'Product 1'},
    {id: 'p2', title: 'Product 2'},
    {id: 'p3', title: 'Product 3'},
]

function Products() {
    return <>
        <h1>Products</h1>
        <ul>
            {PRODUCT_ITEMS.map(prod => (
                <li key={prod.id}><Link to={prod.id}>{prod.title}</Link></li>
            ))}
        </ul>
    </>
}

export default Products;