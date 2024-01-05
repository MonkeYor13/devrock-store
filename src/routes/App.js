import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home";
import Carrito from "../containers/Carrito";
import Producto from "../containers/Producto";
import Layout from "../components/Layout";
import UsarContexto from "../context/UsarContexto";

function App() {
  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      /> */}
      <BrowserRouter>
        <UsarContexto>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route path="/carrito" element={<Carrito />}></Route>
              <Route path="/producto" element={<Producto />}></Route>
            </Routes>
          </Layout> 
        </UsarContexto>
      </BrowserRouter>
    </>
  );
}

export default App;
