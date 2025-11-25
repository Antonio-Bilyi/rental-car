'use client'

import css from './Navigation.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link'; 

const Navigation = () => {

    const pathname = usePathname();


    return (
        <nav aria-label='header-navigation'>
            <ul className={css.navigation_list}>
                <li className={css.navigation_list_item}>
                    <Link href='/' className={pathname === '/' ? css.active : ''}>Home</Link>
                </li>

                <li className={css.navigation_list_item}>
                    <Link href='/catalog' className={pathname === '/catalog' ? css.active : ''}>Catalog</Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;

    
    


