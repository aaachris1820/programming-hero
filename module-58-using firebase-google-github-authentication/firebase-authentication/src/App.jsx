import React, { useState } from 'react';
import app from './firebase/firebaseConfig'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
const App = () => {
  const auth = getAuth(app);

  const [userDetails, setUserDetails] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      setUserDetails(user);
      console.log(user);
    }
    catch { (error) => console.log(error) }

  }

  const handleGithubSignIn = async () => {
    try {
      const githubProvider = new GithubAuthProvider;
      const res = await signInWithPopup(auth, githubProvider);
      const user = res.user;
      setUserDetails(user);
    }
    catch { (e) => console.log(e) }
  }

  const handleSignOut = async () => {
    const signOutUser = await signOut(auth);
    console.log(signOutUser)
    setUserDetails(null);
  }
  console.log(userDetails)

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>firebase authentication</h1>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '79px' }}>
        {userDetails === null ?
          <>
            <button style={{ marginRight: '39px' }} onClick={handleGoogleSignIn}>Sign in Google</button>
            <button onClick={handleGithubSignIn}>Sign in Github</button>
          </> :
          <button onClick={handleSignOut}>Sign Out</button>}

      </div>

      {userDetails ? <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Name : {userDetails.displayName}</p>
        <img src={userDetails?.photoURL} alt="user photo" />
      </div> : ''}

    </div>
  );
};

export default App;