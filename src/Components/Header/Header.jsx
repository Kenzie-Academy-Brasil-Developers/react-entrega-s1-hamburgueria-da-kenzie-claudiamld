import './styles.css'

const Header = ({products, setProducts, filteredProduct, setFilteredProducts}) => {

    const filterFromInput = () => {
        const newArr = products.filter((product) => product.name.includes(filteredProduct) 
        || product.category.includes(filteredProduct))
        setProducts(newArr)
    }

    return(
        <div className='box-header'>
            <h1 className="logo-burger">Burger <span className="logo-kenzie">Kenzie</span></h1>
            <div className='input-box'>
                <input 
                    className="input-header" 
                    placeholder="Digitar pesquisa" 
                    value={filteredProduct}
                    onChange={(event) => setFilteredProducts(event.target.value)}
                />
                <button className="btn-header" onClick={() => filterFromInput()}>Pesquisar</button>
            </div>
        </div>
    )
}

export default Header