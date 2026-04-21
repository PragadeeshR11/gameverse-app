import './App.css';
import { Layout } from './componenets/Layouts';
import Hero from './componenets/Hero';
import Popular from './componenets/Popular';
import Explore from './componenets/Explore';
import Categories from './componenets/Categories';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Popular />
        <Explore />
        <Categories />
        <section>
          <h2 className="sec-head">dummy</h2>
        </section>
      </Layout>
    </>
  );
}

export default App;
