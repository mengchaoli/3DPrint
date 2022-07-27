import "./App.css";
import "./assets/styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./layout/header.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
