import ProductsList from '../components/ProductsList';

const ProductsPage = () => {
  // state kad issaugoti products array (useState)
  // pasileidzia viena karta uzsikrovus komponentui
  // useEffect(() => {}, [])
  return (
    <div>
      <h1>Our Products</h1>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
