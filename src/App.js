import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx'
import { ProductList } from './Components/ProductList/ProductList';
import { Cart } from './Components/Cart/Cart';

function App() {

  const [products, setProducts] = useState([])
  const [filteredProduct, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const handleAddToCart = (value) => {
    const isUnique = currentSale.find(product => product === value)
    const newArr = [...currentSale, value]
    isUnique ? setCurrentSale(currentSale) : setCurrentSale(newArr)
  }

  const handleRemoveToCart = (value) => {
    const newArr = currentSale.filter(product => product !== value)
    setCurrentSale(newArr)
  }

  const handleRemoveAll = (value) => {
    setCurrentSale([])
  }

  const calculateTotal = () => {
    const totalPrice = currentSale.reduce((acc, currValue) => currValue.price + acc, 0)
    setCartTotal(totalPrice.toFixed(2))
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    calculateTotal()
  }, [currentSale])


  return (
    <div>
      <Header 
        products={products} 
        setProducts={setProducts} 
        filteredProduct={filteredProduct} 
        setFilteredProducts={setFilteredProducts}
      />
      <div className='main'>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
        <Cart 
          currentSale={currentSale} 
          handleRemoveToCart={handleRemoveToCart} 
          handleRemoveAll={handleRemoveAll} 
          cartTotal={cartTotal} 
        />
      </div>
    </div>
  );
}

export default App;
