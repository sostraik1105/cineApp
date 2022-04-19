import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/generals/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Footer from "./components/generals/footer/Footer";
import Movies from "./components/pages/movies/Movies";
import Dulceria from "./components/pages/dulceria/Dulceria";
import { DetallePeli } from "./components/pages/movies/DetallePeli";
import { DashBoard } from "./components/pages/admin/DashBoard";
import { PeliculasAdmin } from "./components/pages/admin/Peliculas/PeliculasAdmin";
import { SedesAdmin } from "./components/pages/admin/Sedes/SedesAdmin";
import { useSelector } from "react-redux";
import { LoadingScreen } from "./components/generals/LoadingScreen";

function App() {
  const loader = useSelector(state => state.loader)
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        
        {loader && <LoadingScreen />}

        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/dulceria" element={<Dulceria />} />
          <Route path="/peliculas" element={<Movies />} />
          <Route path="/peliculas/:id" element={<DetallePeli />} />
          <Route path="/admin" element={<DashBoard />}>
            <Route path="sedes" element={<SedesAdmin />}/>
            <Route path="peliculas" element={<PeliculasAdmin />}/>
          </Route>
          <Route path="/*" element={<p>página no encontrada</p>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
