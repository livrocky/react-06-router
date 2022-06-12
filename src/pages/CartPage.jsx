import { useEffect, useState } from 'react';
import CartCard from '../components/products/CartCard';
// import SingleProductCard from '../components/products/SingleProductCard';
// import ProductsList from '../components/ProductsList';

const CartPage = () => {
  console.log('ProductsPage ran');
  // state kad issaugoti products array (useState)
  const [productsArr, setproductsArr] = useState([]);
  const getProductsAndSetState = async () => {
    const resp = await fetch('/db/store.json');
    const dataInJs = await resp.json();
    const cartData = dataInJs['cart'];
    console.log('cartData===', cartData);
    // console.log('dataInJs===', dataInJs);
    const onlyDataWeNeed = cartData.map(({ id, item, price }) => ({
      id,
      price,
      item,
    }));
    console.log('onlyDataWeNeed===', onlyDataWeNeed);
    setproductsArr(onlyDataWeNeed);
  };

  useEffect(() => {
    getProductsAndSetState();
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div className='product-grid'>
        {productsArr.map((pObj) => (
          <CartCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
