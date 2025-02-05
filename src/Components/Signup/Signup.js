import React, { useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';  
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

export default function Signup() {

  const history = useHistory()
  const [username, setUserName] = useState(''); 
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext)


  const handleSubmit = (e) => {
    e.preventDefault();
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {

        return result.user.updateProfile({ displayName: username });
      })
      .then(() => {

        return firebase.firestore().collection('user').add({
          id: firebase.auth().currentUser.uid,
          userName: username,
          phone: phone
        });
      })
      .then(() => {

        setUserName('');
        setEmail('');
        setPhone('');
        setPassword('');
        history.push("/login");
      })
      .catch((error) => {
        
        console.error("Error during sign up:", error);
        alert(error.message);
      });
  };
  
  
  


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
