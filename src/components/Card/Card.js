import './Card.scss';
import {useProducts} from '../../services/useProducts';

export function Card() {
    const { products } = useProducts();
    return (
        <div className="h-screen card-container">
            <ul className='w-full py-9 flex flex-wrap justify-center items-center gap-8'>
                {products.map((product)=>(
                    <div className='w-screen mx-6 flex flex-col items-center justify-center'>
                        <li key={product.id}><img src={product.image} alt={product.title} className='mt-4'/></li>
                        <li key={product.id}>{product.title}</li>
                        <li key={product.id}>{product.price} R$</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}