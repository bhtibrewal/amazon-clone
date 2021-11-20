import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import SignIn from './SignIn';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from '@firebase/auth';
import { Footer } from './Footer';

function App() {
  const [{}, dispatch]=useStateValue();
 
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      // console.log('user >>>', user);
      if (user){
        // user just logged in
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }
      else{
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      
    }
  }, [])
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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
