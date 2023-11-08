function Header () {
const isUserLogged = true;

    return (
        <header>
            <h1>Mon super site d'E-commerce</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
            {isUserLogged?(
            <li>Hélène QUINTARD</li>
            ):(
            <li>Connection</li>
            )}
            
                </ul>
            </nav>
        </header>
    );
}

export default Header;