import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyCjjUHcZb1zaYK1Nf-4n1bmKlVlAM90wg4",
  authDomain: "bmp-test-73489.firebaseapp.com",
  projectId: "bmp-test-73489",
  storageBucket: "bmp-test-73489.appspot.com",
  messagingSenderId: "99030167530",
  appId: "1:99030167530:web:3f60070853d26c2300cc93",
};

const firebase = initializeApp(config);
const firestore = getFirestore(firebase);
export default firestore;
