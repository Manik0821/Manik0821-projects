import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
import { Header } from './components/header/header';
import { ModalPage } from './components/dashboard/pages/modalPage/ModalPage';
import { FullScreenModalPage } from './components/dashboard/pages/fullScreenModalPage/FullScreenModalPage';
import { TabsComponent } from './components/dashboard/pages/TabsComponent/TabsComponent';
import { Pagination } from './components/dashboard/pages/Paginate/Pagination';

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
      element: <ModalPage title={''} subtitle={''} />
    },
    {
      path:"/FullScreenPanel",
      element: <FullScreenModalPage />
    },
    {
      path:"/TabsComponent",
      element: <TabsComponent />
    },
    {
      path:"/Pagination",
      element: <Pagination />
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