// import { Layout } from '../UI/Layouts';
import Navbar from './Navbar';
import Hero from './Hero';
import Popular from './Popular';
import Explore from './Explore';
import Categories from './Categories';
import Subsription from './Subscription';
import Collection from './Collection';
import Footer from './Footer';

export default function Home() {
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
