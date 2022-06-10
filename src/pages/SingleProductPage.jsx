import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// parissiusti ir issaugoti state produkto kurio id === productId
// duomenis ir supildyti jsx

const SingleProductPage = () => {
  const [currentProduct, setCurrentProduct] = useState({});

  const { productId } = useParams();

  const getCurrentProductAndSave = async () => {
    const resp = await fetch('/db/products.json');
    const dataInJs = await resp.json();
    console.log('dataInJs ===', dataInJs);
    console.log('productId ===', productId);
    const currentProduct = dataInJs.find(({ id }) => id === +productId);
    console.log('currentProduct ===', currentProduct);
    setCurrentProduct(currentProduct);
  };

  useEffect(() => {
    getCurrentProductAndSave();
  }, []);

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <h2>{currentProduct.price}</h2>
      <img src={currentProduct.image} alt='image' />
      <p className='description'>{currentProduct.description} </p>
      <Link to='/products'>
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default SingleProductPage;
