import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import { ProductList } from './Components/ProductList/ProductList';
import { Cart } from './Components/Cart/Cart';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
  }, [])

  console.log(products);


  return (
    <div>
      <Header />
      <div className='main'>
        <ProductList products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
