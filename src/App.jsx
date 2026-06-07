import './App.css';
import { Layout } from './UI/Layouts';
import Home from './componenets/Home';
import Join from './pages/Join.jsx';
import Subscribed from './pages/Subscribed.jsx';
import PortFolio from './pages/AboutMe.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/join', element: <Join /> },
  { path: '/subscribed', element: <Subscribed /> },
  { path: '/portfolio', element: <PortFolio /> },
]);

function App() {
  return (
    <div className="relative">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
