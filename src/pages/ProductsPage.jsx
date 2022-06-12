import { useEffect, useState } from 'react';
import SingleProductCard from '../components/products/SingleProductCard';
import ProductsList from '../components/ProductsList';

const ProductsPage = () => {
  console.log('ProductsPage ran');
  // state kad issaugoti products array (useState)
  const [productsArr, setproductsArr] = useState([]);
  // pasileidzia viena karta uzsikrovus komponentui
  const getProductsAndSetState = async () => {
    const resp = await fetch('/db/products.json');
    const dataInJs = await resp.json();
    console.log('dataInJs===', dataInJs);
    // const onlyDataWeNeed = dataInJs.map((pObj) => {
    //   return {
    //     id: pObj.id,
    //     title: pObj.title,
    //     price: pObj.price,
    //     image: pObj.image,
    //   };
    // });
    const onlyDataWeNeed = dataInJs.map(({ id, title, price, image }) => ({
      id,
      title,
      price,
      image,
    }));
    console.log('onlyDataWeNeed===', onlyDataWeNeed);
    setproductsArr(dataInJs);
  };

  useEffect(() => {
    getProductsAndSetState();
    console.log('useEffect ran');
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div className='product-grid'>
        {/* map per productsArr ir make <SingleProductCard /> */}
        {productsArr.map((pObj) => (
          <SingleProductCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
