import "./App.css";
import "./assets/styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Header from "./layout/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/sign-in" exact element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
