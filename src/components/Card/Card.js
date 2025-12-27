import './_card.scss';
export function Card({ filteredProducts }) {

    return (
        <div className="card flex flex-col gap-4 m-4 p-4">
            <div className=' flex flex-col items-center justify-center p-4 '>
                <img src={filteredProducts.image} alt={filteredProducts.title} />
                <h2>{filteredProducts.title}</h2>
                <span>{(filteredProducts.price + 20.00).toFixed(2)} R$</span>
                <p>{(filteredProducts.price).toFixed(2)} R$</p>
            </div>
        </div>
    )
}