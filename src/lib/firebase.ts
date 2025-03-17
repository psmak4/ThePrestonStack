import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_Key,
	authDomain: import.meta.env.VITE_FIREBASE_Auth_Domain,
	databaseURL: import.meta.env.VITE_FIREBASE_Database_URL,
	projectId: import.meta.env.VITE_FIREBASE_Project_Id,
	storageBucket: import.meta.env.VITE_FIREBASE_Storage_Bucket,
	messagingSenderId: import.meta.env.VITE_FIREBASE_Messaging_Sender_Id,
	appId: import.meta.env.VITE_FIREBASE_App_Id,
	measurementId: import.meta.env.VITE_FIREBASE_Measurement_Id,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const functions = getFunctions(app)

if (window.location.hostname === 'localhost') {
	console.log('testing locally -- hitting local emulators')
	connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
	connectFirestoreEmulator(db, 'localhost', 8080)
	connectFunctionsEmulator(functions, 'localhost', 5001)
}
