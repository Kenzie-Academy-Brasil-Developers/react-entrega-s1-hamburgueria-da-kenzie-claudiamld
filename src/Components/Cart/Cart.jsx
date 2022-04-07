import { CartProduct } from '../CartProduct/CartProduct'
import './styles.css'

export const Cart = ({currentSale, handleRemoveToCart, handleRemoveAll, cartTotal}) => {

    return(
        
        <div className="cart-box">
            <div className="title-cart--div">
                <h1 className="title-cart">Carrinho de compras</h1>
            </div>
            {
                currentSale.length < 1 
                ? (
                    <div className='emptyCart'>
                        <h3 className='emptyCart-title'>Sua sacola está vazia</h3>
                        <span className='emptyCart-span'>Adicionar itens</span>
                    </div>
                ) : (
                    <div className='cart-content'>
                        <div className="cartPrincipal-content">
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
                            <span className="total-value">R${cartTotal}</span>
                        </div>
                        <button className="btn-removerTodos" onClick={handleRemoveAll}>Remover todos</button>
                    </div>
                )
            }
           
            
        </div>
    )
}