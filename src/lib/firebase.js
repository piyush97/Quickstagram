const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MES_ID,
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

export { firebase, FieldValue };
