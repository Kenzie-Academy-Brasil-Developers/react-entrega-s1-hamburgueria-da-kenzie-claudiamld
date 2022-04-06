import './styles.css'

export const Cart = ({product}) => {
    return(
        <div className="cart-box">
            <div className="title-cart--div">
                <h1 className="title-cart">Carrinho de compras</h1>
            </div>
            <div className="cart-content">

            </div>
            <div className="div-total">
                <h2 className="total-cart">Total:</h2>
                <span className="total-value"></span>
            </div>
            <button className="btn-removerTodos">Remover todos</button>
        </div>
    )
}