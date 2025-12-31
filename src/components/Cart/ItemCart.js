import './_itemCart.scss';

export function ItemCart({ isOpen, onClose }) {
    return (
        <div className="itemCart absolute grid grid-cols-1 right-0" style={{ display: isOpen ? 'block' : 'none' }}>
            <section className='m-4 w-auto h-svh flex flex-col items-center p-4 gap-4'>
                <span>carrinho de compras</span>
                <button onClick={onClose}>Fechar Carrinho</button>
            </section>

        </div>
    )
}