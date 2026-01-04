import { ShoppingCart, Plus } from 'lucide-react';
import './_card.scss';



export function Card({ filteredProducts }) {


    return (
        <div className="card m-4">
            <div className='card-data flex flex-col items-center justify-center'>
                <img src={filteredProducts.image} alt={filteredProducts.title} />
                <h2 className='line-clamp-2'>{filteredProducts.title}</h2>
                <span>{(filteredProducts.price + 20.00).toFixed(2)} R$</span>
                <p>{(filteredProducts.price).toFixed(2)} R$</p>

                <div className='container-btn space-x-1'>
                    <button className='btn-shop'>Comprar</button>
                    <div className='cart-plus relative inline-flex mt-2'>
                        <button className='text-blue-800 '><ShoppingCart size={32} strokeWidth={1.5} /></button>
                        <span className='absolute inset-0 flex items-center justify-center pl-1 font-bold'>
                            <Plus size={16} strokeWidth={2} className='text-blue-800 ' />
                        </span>
                    </div>

                </div>

            </div>

        </div>
    );
}