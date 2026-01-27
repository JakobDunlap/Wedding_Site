import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';

// legacy modules //
//import Header from './Header';
//import Content from './Content';
//import Footer from './Footer';

// modules //
import Home from './pages/Home';
import Form from './pages/Form';

// layouts //
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="form" element={<Form />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;