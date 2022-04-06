import { CartProduct } from '../CartProduct/CartProduct'
import './styles.css'

export const Cart = ({currentSale, handleRemoveToCart, handleRemoveAll}) => {
    return(
        
        <div className="cart-box">
            <div className="title-cart--div">
                <h1 className="title-cart">Carrinho de compras</h1>
            </div>
            <div className="cart-content">
                {currentSale.map(productCart => (
                    <CartProduct 
                    productCart={productCart}
                    handleRemoveToCart={handleRemoveToCart}
                    key={productCart.id}
                    />
                ))}
            </div>
            <div className="div-total">
                <h2 className="total-cart">Total:</h2>
                <span className="total-value"></span>
            </div>
            <button className="btn-removerTodos" onClick={handleRemoveAll}>Remover todos</button>
        </div>
    )
}