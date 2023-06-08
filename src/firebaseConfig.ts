// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  where,
  doc,
  query,
  getDocs,
  updateDoc,
  getDoc,
} from "firebase/firestore";

import firestore from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBYu8yWKHfyu71kDdc9FdNDWOvUwpwLT0I",
  authDomain: "financr-ha.firebaseapp.com",
  projectId: "financr-ha",
  storageBucket: "financr-ha.appspot.com",
  messagingSenderId: "351139161522",
  appId: "1:351139161522:web:7c46117cabd0ba279f30ab",
  measurementId: "G-PZXCTC5SH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0 && user.email != null) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });

      //to create a document with the name of year and month
      const currentDate = new Date();
      const month = currentDate
        .toLocaleString("en-US", { month: "long" })
        .toLowerCase();
      const year = currentDate.getFullYear();
      const monthYear = month + year;

      // Create a collection named "data"
      const dataCollectionRef = collection(db, "data");

      // Create a document based on the email within the "data" collection
      const emailDocRef: firestore.DocumentReference<firestore.DocumentData> =
        doc(dataCollectionRef, user.email);

      // Create a subcollection based on the month and year
      const monthYearSubcollectionRef: firestore.CollectionReference<firestore.DocumentData> =
        collection(emailDocRef, monthYear);

      // Create a document named "data" within the subcollection
      const dataDocRef: firestore.DocumentReference<firestore.DocumentData> =
        doc(monthYearSubcollectionRef, "data");

      // Set the document's data with the "assets" property
      await setDoc(dataDocRef, {
        Received: [
          {
            amount: 2000,
            name: "website dev work",
            attribute: "active",
          },
          {
            amount: 4000,
            name: "teaching students",
            attribute: "active",
          },
          {
            amount: 2000,
            name: "room rent",
            attribute: "passive",
          },
          {
            amount: 4000,
            name: "stocks sold",
            attribute: "passive",
          },
        ],

        Assets: [
          {
            amount: -2000,
            name: "business",
            attribute: "self",
          },
          {
            amount: 5000,
            name: "Tata stocks",
            attribute: "future",
          },
        ],
        Liabilities: [
          {
            amount: 2000,
            name: "party",
            attribute: "luxury",
          },
          {
            amount: 4000,
            name: "going out",
            attribute: "luxury",
          },
          {
            amount: 20000,
            name: "home",
            attribute: "responsibility",
          },
          {
            amount: 4000,
            name: "room rent",
            attribute: "responsibility",
          },
        ],

        Expenses: [
          {
            amount: -20000,
            name: "home",
            attribute: "general",
          },
          {
            amount: -4000,
            name: "room rent",
            attribute: "general",
          },
          {
            amount: -1000,
            name: "travel to hometown",
            attribute: "unexpected",
          },
          {
            amount: -2200,
            name: "medical",
            attribute: "unexpected",
          },
          {
            amount: -2000,
            name: "mumma",
            attribute: "gifts",
          },
          {
            amount: -4000,
            name: "Bahna",
            attribute: "gifts",
          },
        ],
      });

      // // Update the "assets" property with additional values
      // await updateDoc(dataDocRef, {
      //   assets: arrayUnion("asset4", "asset5"),
      // });
      // await setDoc(doc(db, "individual-todos", user.email), {
      //   task: [
      //     {
      //       uid: 0,
      //       completed: false,
      //       title: "Sample Task"
      //     }
      //   ]
      // });
    }
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(getAuth());
};

const fetchData = async () : Promise<firestore.DocumentData | null > => {
  const user = auth.currentUser;
  console.log(user)
  if (user) {
    const currentDate = new Date();
    const currentMonth =
      currentDate.toLocaleString("en-US", { month: "long" }).toLowerCase() +
      currentDate.getFullYear();
    try {
      // Get the currently logged-in user
      // Get the email of the current user
      const email = user?.email == null ? "" : user.email;

      // Reference to the document in the 'data' collection with the user's email
      const colRef = collection(db, "data");
      const docRef = doc(colRef, email);
      const collectionRef = collection(docRef, currentMonth);
      const documentRef = doc(collectionRef, "data");
      const data = await getDoc(documentRef);
      // Fetch the subcollection 'month' and document 'data'

      if (data.exists()) {
        console.log("Document data:", data.data());
        return data.data();
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  return null;
};

export { auth, db, signInWithGoogle, logout, fetchData };
