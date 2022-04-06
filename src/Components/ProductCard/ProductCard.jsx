import './styles.css'

export const ProductCard = ({handleAddToCard, product}) => {

    return(
        <div className="card-box">
            <img src={product.img} alt="tasty-product" className='product-picture'/>
            <h1 className='product-title'>{product.name}</h1>
            <span className='product-category'>{product.category}</span>
            <p className='product-price'>R$ {product.price}</p>
            <button className="btn-card" onClick={() => handleAddToCard(product)}>Adicionar</button>
        </div>
    )
}