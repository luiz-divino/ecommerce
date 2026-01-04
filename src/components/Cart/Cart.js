import { useEffect } from 'react';
import './_cart.scss';


export function Cart({ isOpen, onClose }) {
    useEffect(()=>{
        if(isOpen){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
    },[isOpen])

    return (
        <div className="itemCart absolute grid grid-cols-1 w-full m-auto top-0 z-50" style={{ display: isOpen ? 'block' : 'none' }}>
            <section className='m-4 w-auto h-svh flex flex-col items-center p-4 gap-4'>
                <span>carrinho de compras</span>
                <button onClick={onClose}>Fechar Carrinho</button>
            </section>

        </div>
    )
}