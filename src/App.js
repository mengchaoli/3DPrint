import './App.css';
import './assets/styles/main.scss';
import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Header from './layout/header';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/on-board' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        {!authCtx.isLoggedIn && <Route path='/sign-in' element={<SignIn />} />}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
