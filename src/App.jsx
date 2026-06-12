import './App.css';
import { Layout } from './UI/Layouts';
import Home from './componenets/Home';
import Join from './pages/Join.jsx';
import Subscribed from './pages/Subscribed.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/join', element: <Join /> },
  { path: '/subscribed', element: <Subscribed /> },
]);

function App() {
  return (
    <div className="relative w-full">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
