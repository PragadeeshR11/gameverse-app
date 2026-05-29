import './App.css';
import { Layout } from './UI/Layouts';
import Home from './componenets/Home';
import Join from './pages/Join.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/join', element: <Join /> },
]);

function App() {
  return (
    <div className="relative">
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
    </div>
  );
}

export default App;
