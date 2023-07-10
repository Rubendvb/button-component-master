import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu.tsx";

import Buttons from "./pages/Buttons.tsx";
import Inputs from "./pages/Inputs.tsx";
import Layout from "./components/Layout.tsx";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/inputs" element={<Inputs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
