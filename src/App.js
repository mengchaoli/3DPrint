import "./App.css";
import "./assets/styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Header from "./layout/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/on-board" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
