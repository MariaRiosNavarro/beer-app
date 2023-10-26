import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BeerList from "./pages/BeerList";
import Detail from "./pages/Detail";
// import Random from "./pages/Random";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/beers" element={<BeerList />}></Route>
          <Route path="/beer/:idBeer" element={<Detail />}></Route>
          <Route path="/beer/random" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
