import type { Product } from "../types/types";

function Card(props: { product: Product }) {
  const { product } = props;
  return (
    <div className="card">
      <div className="img-container">
        <img src={product.image} alt="" />
      </div>
      <div className="details">
        <h3 className="product-title">{product.title.toLowerCase()}</h3>
        <h5 className="product-price">{product.price}</h5>
      </div>
    </div>
  );
}

export default Card;
