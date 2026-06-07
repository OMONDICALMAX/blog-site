import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Blog from "./components/Blog";
import "./App.css"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;