import type { User } from "../types/types";

function Card(props: { user: User }) {
  const { user } = props;
  return (
    <div className="card">
      <div className="details">
        <h3 className="product-title">{user.name.firstname}</h3>
        {user.address?.geolocation?.lat}
        <h5 className="product-price">{user.address?.city}</h5>
      </div>
    </div>
  );
}

export default Card;
