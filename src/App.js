import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import SignIn from './SignIn';

function App() {
  
  return (
    <Router>
      <div className="app">
      <Routes>
          <Route path="/sign-in" element={
            <>
              <SignIn />
            </>
          } />
        </Routes>
        <Routes>
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
            </>
          } />
        </Routes>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
