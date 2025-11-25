import css from './page.module.css';
import Link from 'next/link';
import Container from '../components/Container/Container';

const Home = () => {

  return (
    <main className={css.background}>
      <Container>
        <div className={css.home_content}>
          <h1 className={css.home_title}>Find your perfect rental car</h1>

          <p className={css.home_description}>Reliable and budget-friendly rentals for any journey</p>
        </div>

        
          <Link href='/catalog' className={css.home_button}>View Catalog</Link>

      </Container>
    </main>
  );
};

export default Home;
