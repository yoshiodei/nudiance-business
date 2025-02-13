import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';
// import { getAnalytics } from 'firebase/analytics';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: 'tektoss-d83df.appspot.com',
  messagingSenderId: '897386202691',
  appId: '1:897386202691:web:8ec147d26f9ca63777f6f6',
  measurementId: 'G-E54BY8C0GE',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
// export const analytics = getAnalytics(app);

// export const db = getFirestore(app);


const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

export { db };