import Hero from './componenets/Hero';
import { Layout } from './componenets/Layouts';
import Popular from './componenets/Popular';
import Explore from './componenets/Explore';
import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Popular />
        <Explore />
      </Layout>
    </>
  );
}

export default App;
