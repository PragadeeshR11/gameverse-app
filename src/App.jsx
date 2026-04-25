import './App.css';
import { Layout } from './UI/Layouts';
import Hero from './componenets/Hero';
import Popular from './componenets/Popular';
import Explore from './componenets/Explore';
import Categories from './componenets/Categories';
import Subsription from './componenets/Subscription';
import Collection from './componenets/Collection';

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
        {/* <section>
          <h2 className="sec-head">dummy</h2>
        </section> */}
      </Layout>
    </>
  );
}

export default App;
