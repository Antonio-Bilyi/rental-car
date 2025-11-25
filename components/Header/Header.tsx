import Link from "next/link";
import Container from "../Container/Container";
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';

const Header = () => {

    return (
        <header className={css.header}>
            <Container>
                <div className={css.header_content}>
                    <Link href='/'>
                        <svg className={css.header_logo} width="102" height="16">
                            <use href="/svg-spite.svg#icon-Logo"></use>
                        </svg>
                    </Link>

                    <Navigation />
                    
                </div>
            </Container>

        </header>
    )
};

export default Header;