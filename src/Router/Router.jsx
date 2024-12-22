import { Routes, Route } from "react-router";
import HomePage from '../pages/HomePage'
import MainLayout from "../Layout/MainLayout";
import Product from "../Pages/Product";
import About from "../Pages/About";
import Reviews from "../Pages/Reviews";

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />




        

      </Route>

    </Routes>
  )
}

export default Router