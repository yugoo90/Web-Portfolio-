import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
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