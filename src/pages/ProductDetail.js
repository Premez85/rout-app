import {Link, useParams} from 'react-router-dom';

function ProductDetail() {
    const param = useParams();
    return <>
        <h1>Product Detail</h1>
        <p>{param.productId}</p>
        <Link to='..'>Back</Link>
    </>

}

export default ProductDetail;