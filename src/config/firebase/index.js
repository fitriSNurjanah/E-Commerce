import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import swal from "sweetalert";

const firebaseConfig = {
  apiKey: "AIzaSyCDSCWmWQf9WT42o5QOE_m5hy5lVPaoFWI",
  authDomain: "e-commerce-fd6d2.firebaseapp.com",
  projectId: "e-commerce-fd6d2",
  storageBucket: "e-commerce-fd6d2.appspot.com",
  messagingSenderId: "223856568904",
  appId: "1:223856568904:web:a6e67750bedb1339a8c67d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("TEst BERHASIL");
  } catch (err) {
    console.error(err);
    swal(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    swal(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
