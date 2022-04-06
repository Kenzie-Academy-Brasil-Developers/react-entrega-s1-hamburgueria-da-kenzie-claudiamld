import './styles.css'

export const CartProduct = ({productCart, handleRemoveToCart}) => {
    return(
        <div className="cartProduct-box">
            <div className="div-image--cart">
                <img src={productCart.img} alt='tasty-product' />
            </div>
            <div className="div-titletype--cart">
                <h2 className="title-cartProduct">{productCart.name}</h2>
                <span className='category-cart'>{productCart.category}</span>
            </div>
            <button className="btn-CartProduct--remover" onClick={() => handleRemoveToCart(productCart)}>Remover</button>
        </div>
    )
}