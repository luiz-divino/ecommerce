import './_navbar.scss';
import { useState } from 'react';

export function Navbar({ search, setSearch }) {
    const [icone, setIcone] = useState('fa-magnifying-glass');
    const [active, setActive] = useState(false);


    const handleClick = () => {
        setActive(!active);
        setIcone(active ? 'fa-magnifying-glass' : 'fa-chevron-down');
    } 
    
    return (
        <nav className='p-6'>

            <button onClick={handleClick}>
                <i className={"fa-solid " + icone}></i>
            </button>

            <input
                type='text'
                placeholder='o que você procura?'
                className={`${active ? 'hidden' : 'block'} p-3`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='btn-cart'>
                <i className={"fa-solid fa-cart-shopping"}></i>
            </button>
        </nav>
    )
}