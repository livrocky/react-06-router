import { Link } from 'react-router-dom';

const CartCard = (props) => {
  return (
    <div className='product-card'>
      <h3>{props.item}</h3>
      <p>$ {props.price}</p>
      <Link to={`/products/${props.id}`}>
        <button>Read more</button>
      </Link>
    </div>
  );
};

export default CartCard;
