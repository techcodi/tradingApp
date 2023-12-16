import "./App.css";
import Welcome from "./components/Welcome";
// import { useState, useEffect } from "react";
// import DotLoader from "react-spinners/DotLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleItem from "./components/SingleItem";
import Nav from "./components/Nav";
import { ShopContextProvider } from "./CreateContext";
function App() {
  // const [loading, setLoader] = useState(false);

  // useEffect(() => {
  //   setLoader(true);
  //   setTimeout(() => {
  //     setLoader(false);
  //   }, 3000);
  // }, []);
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="product" element={<Welcome />} />
          <Route path="products" element={<SingleItem />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
