import Navbar from './Navbar';
import Hero from './Hero';
import Popular from './Popular';
import Explore from './Explore';
import Categories from './Categories';
import Subsription from './Subscription';
import Collection from './Collection';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Popular />
      <Explore />
      <Categories />
      <Subsription />
      <Collection />
      <Footer />
    </>
  );
}
