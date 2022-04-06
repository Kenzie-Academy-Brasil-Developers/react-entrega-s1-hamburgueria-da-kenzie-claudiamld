import './styles.css'
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductList = ({products}) => {
    return(
        <div className='products-box'>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    cardImage={product.img}
                    title={product.name}
                    category={product.category}
                    price={product.price}
                />
            ))}
        </div>
    )
}