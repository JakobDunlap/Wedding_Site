import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// css //
import './App.css';

// modules //
import Home from './pages/Home';
import Form from './pages/Form';
import FormSubmitted from './pages/FormSubmitted';
import Gallery from './pages/Gallery';
import Venue from './pages/Venue';
import NotFound from './pages/NotFound';

// layouts //
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="form" element={<Form />} />
      <Route path="form-submitted" element={<FormSubmitted />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="venue" element={<Venue />} />

      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;