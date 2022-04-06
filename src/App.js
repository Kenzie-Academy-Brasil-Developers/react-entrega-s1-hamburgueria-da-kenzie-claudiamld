import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import { ProductList } from './Components/ProductList/ProductList';
import { Cart } from './Components/Cart/Cart';

function App() {

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])

  const handleAddToCart = (value) => {
    const newArr = [...currentSale, value]
    setCurrentSale(newArr)
  }

  const handleRemoveToCart = (value) => {
    const newArr = currentSale.filter(product => product !== value)
    setCurrentSale(newArr)
  }

  const handleRemoveAll = (value) => {
    setCurrentSale([])
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log(currentSale);
  }, [currentSale])

  return (
    <div>
      <Header />
      <div className='main'>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
        <Cart currentSale={currentSale} handleRemoveToCart={handleRemoveToCart} handleRemoveAll={handleRemoveAll} />
      </div>
    </div>
  );
}

export default App;
