import React from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../../../config/firebase.config';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";

function Login() {


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {

        firebase.auth().signInWithPopup(provider)
            .then(response => {
                const { displayName, email, photoURL } = response.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
                // console.log(displayName, email, photoURL);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(response => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: '',
                    error: '',
                    success: false
                }
                setUser(signedOutUser);
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                console.log(error.message);
            })
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserInfo(user.name)
                })

                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(response => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('sign in user info', response.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        e.preventDefault();
    }

    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user name update successfully');
        }).catch(function (error) {
            console.log('an error happened');
        });
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '200px' }}>
            {
                user.isSignedIn ? <button onClick={handleSignOut}>sign out</button> :
                    <button onClick={handleSignIn}>Sign in using Google</button>
            }
            {
                user.isSignedIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>your e-mail: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }

            <h6>Sign In/ Sign Up</h6>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">new user sign up</label>
            <form onSubmit={handleSubmit}>
                {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="your name" />}
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="enter your email address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required />
                <br /> <br/>
                <input type="submit" value={newUser ? 'sign up' : 'sign in'} />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>user {newUser ? 'created' : 'logged in'} successfully</p>
            }
        </div>
    );
}

export default Login;
