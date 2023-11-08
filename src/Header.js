function Header () {
const userLogged = {
    firstname : "Hélène",
    lastname : "QUINTARD",
    job : "web dev"
}

const isUserLogged = true;
const itemsInCart = 2;

    return (
        <header>
            <h1>Mon super site d'E-commerce</h1>
            <nav>
                <ul>
                    {isUserLogged?(
                    <li>{userLogged.firstname} {userLogged.lastname} ({userLogged.job})</li>
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