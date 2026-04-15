import Hero from './componenets/Hero';
import Layout from './componenets/Layout';
import Popular from './componenets/Popular';
import './App.css';

function App() {
  return (
    <>
      <Layout>
        <Hero />
        <Popular />
      </Layout>
    </>
  );
}

export default App;
