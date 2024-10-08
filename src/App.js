import React, { useContext, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SignUp from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} =  useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  })
  return (
    <div>
      <Router>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/signup' >
          <SignUp />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/create' >
          <Create />
        </Route>

      </Router>
    </div>
  );
}

export default App;
