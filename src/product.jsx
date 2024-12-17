import './product.css'

function product(title,price) {
    return (
        <>
        <div className="product">
            <h1>Title: {title}</h1>
            <h2>Price: {price}</h2>
        </div>
        </>
    );
}
    export default product;