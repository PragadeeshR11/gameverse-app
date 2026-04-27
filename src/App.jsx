import './App.css';
import { Layout } from './UI/Layouts';
import Hero from './componenets/Hero';
import Popular from './componenets/Popular';
import Explore from './componenets/Explore';
import Categories from './componenets/Categories';
import Subsription from './componenets/Subscription';
import Collection from './componenets/Collection';
import Footer from './componenets/Footer';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Popular />
        <Explore />
        <Categories />
        <Subsription />
        <Collection />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
