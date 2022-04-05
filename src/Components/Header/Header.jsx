import './styles.css'

const Header = () => {
    return(
        <div className='box-header'>
            <h1 className="logo-burger">Burger <span className="logo-kenzie">Kenzie</span></h1>
            <div className='input-box'>
                <input className="input-header" placeholder="Digitar pesquisa" />
                <button className="btn-header">Pesquisar</button>
            </div>
        </div>
    )
}

export default Header