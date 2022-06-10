import { useEffect, useState } from 'react';

function ProductsList() {
  const [productsArray, setProductsArray] = useState([]);

  async function getProducts() {
    const resp = await fetch('/db/products.json');
    const dataInJs = await resp.json();
    setProductsArray(dataInJs);
  }
  useEffect(() => {
    getProducts();
  });
  return (
    <div className='display'>
      {productsArray.length === 0 && <h2>Loading products ...</h2>}
      {productsArray.map((cObj) => (
        <div key={cObj.id} className='card'>
          <img className='img' src={cObj.image} alt='Product' />
          <div className='card-info'>
            <p className='desc'>{cObj.title}</p>
            <h2 className='price'>€ {cObj.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
