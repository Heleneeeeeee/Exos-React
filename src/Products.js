function Products () {

    const productsAvailable = ["Robe", "Pull", "Pantalon"];

    return (
       <main>
        {productsAvailable.map((product) => {
        return (
        <article>
            <h2>{product}</h2>
        </article>
        );
            })}
       </main>
    );
}

export default Products;