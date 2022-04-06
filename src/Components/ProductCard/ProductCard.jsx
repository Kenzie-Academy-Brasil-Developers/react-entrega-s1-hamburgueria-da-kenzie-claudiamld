import './styles.css'

export const ProductCard = ({cardImage, title, category, price}) => {

    return(
        <div className="card-box">
            <img src={cardImage} alt="tasty-product" className='product-picture'/>
            <h1 className='product-title'>{title}</h1>
            <span className='product-category'>{category}</span>
            <p className='product-price'>R$ {price}</p>
            <button className="btn-card">Adicionar</button>
        </div>
    )
}