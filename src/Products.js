function Products () {

    const productsAvailable = [
        {title:"Robe",
         price: 170,
         isPublished:"true",
        },
        {title:"Pull",
         price: 50,
         isPublished:"true",
        },
        {title:"Pantalon",
         price: 120,
         isPublished:"true",
        },
        {title:"Chemise",
         price: 100,
         isPublished:"true",
        },
    ];

    return (
       <main>
        {productsAvailable.map((product) => {
        return (
        <article>
            <h2>{product.title}</h2>
            <p>{product.price}€</p>
        </article>
        );
            })}
       </main>
    );
}

export default Products;