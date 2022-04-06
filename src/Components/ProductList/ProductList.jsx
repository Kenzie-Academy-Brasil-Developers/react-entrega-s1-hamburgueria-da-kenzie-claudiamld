import './styles.css'
import { ProductCard } from "../ProductCard/ProductCard"

export const ProductList = ({products, handleAddToCart}) => {

    return(
        <div className='products-box'>
            {products.map(product => (
                <ProductCard
                    product={product}
                    handleAddToCard={handleAddToCart}
                    key={product.id}
                />
            ))}
        </div>
    )
}