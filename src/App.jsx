import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        {/* Your routes and components go here */}
        <Routes>
          {/* "/" */}
          <Route index element={<Home />} />

          {/* any unknown route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}