function Header () {
const isUserLogged = true;
const itemsInCart = 2;

    return (
        <header>
            <h1>Mon super site d'E-commerce</h1>
            <nav>
                <ul>
                    {isUserLogged?(
                    <li>Hélène QUINTARD</li>
                    ):(
                    <li>Connexion</li>
                    )}  
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                    {itemsInCart > 0 ?(
                    <li>Cart : {itemsInCart}</li>
                    ):(
                    <li>Pas d'item dans le panier</li>
                    )}
            
            
                </ul>
            </nav>
        </header>
    );
}

export default Header;