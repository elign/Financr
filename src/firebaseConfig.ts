// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getFirestore, 
          collection, 
          addDoc,
          setDoc,
          doc, 
          where, 
          query, 
          getDocs 
} from "firebase/firestore"

import {
          GoogleAuthProvider,
          getAuth,
          signInWithPopup,
          signInWithEmailAndPassword,
          createUserWithEmailAndPassword,
          sendPasswordResetEmail,
          signOut,
          updateProfile,
}from "firebase/auth";


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBYu8yWKHfyu71kDdc9FdNDWOvUwpwLT0I",
    authDomain: "financr-ha.firebaseapp.com",
    projectId: "financr-ha",
    storageBucket: "financr-ha.appspot.com",
    messagingSenderId: "351139161522",
    appId: "1:351139161522:web:7c46117cabd0ba279f30ab",
    measurementId: "G-PZXCTC5SH9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });

      await setDoc(doc(db, "individual-todos", user.email), {
        task: [
          {
            uid: 0,
            completed: false,
            title: "Sample Task"
          }
        ]
      });
    }
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

const loginInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await updateProfile(user, {
      displayName: name
    });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    await setDoc(doc(db, "individual-todos", email), {
      task: [
        {
          uid: 0,
          completed: false,
          title: "Sample Task"
        }
      ]
    });
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err : any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(getAuth());
};

export {
  auth,
  db,
  signInWithGoogle,
  loginInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};