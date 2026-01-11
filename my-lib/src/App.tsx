import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
import { Header } from './components/header/header';
import { ModalPage } from './components/modalPage/ModalPage';
import { FullScreenModalPage } from './components/fullScreenModalPage/fullScreenModalPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div style={{ padding: '20px' }}>
          <h1>Go to Dashboard</h1>
          <Link to="/Dashboard">Go to Dashboard</Link>
        </div>
      )
    },
    {
      path: "/Dashboard",
      element: <Dashboard />
    },
    {
      path:"/Modal",
      element: <ModalPage />
    },
    {
      path:"/FullScreenPanel",
      element: <FullScreenModalPage />
    }
  ]);

  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;