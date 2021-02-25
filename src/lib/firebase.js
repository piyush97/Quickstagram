const config = {
  apiKey: "AIzaSyC04XJFplOdod94ZZ0CnFvge4EEk-3lz7k",
  authDomain: "quickstagram.firebaseapp.com",
  projectId: "quickstagram",
  storageBucket: "quickstagram.appspot.com",
  messagingSenderId: "207354754152",
  appId: "1:207354754152:web:62a432c784bf11253977dd",
  measurementId: "G-SNKSYEFLMT",
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };
