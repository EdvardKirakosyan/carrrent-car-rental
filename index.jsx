import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Cars from "./pages/Cars/Cars"
import CarDetail from "./pages/Cars/CarDetail"
import Reviews from "./pages/Host/Reviews"
import HostCars from "./pages/Host/HostCars"
import HostCarDetail from "./pages/Host/HostCarDetail"
import HostCarInfo from "./pages/Host/HostCarInfo"
import HostCarPricing from "./pages/Host/HostCarPricing"
import HostCarPhotos from "./pages/Host/HostCarPhotos"
import PageNotFound from "./pages/PageNotFound"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cars" element={<Cars />} />
          <Route path="cars/:id" element={<CarDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<HostCars />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="cars/:id" element={<HostCarDetail />}>
              <Route index element={<HostCarInfo />} />
              <Route path="pricing" element={<HostCarPricing />} />
              <Route path="photos" element={<HostCarPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
