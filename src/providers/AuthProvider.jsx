import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import auth from "../config/firebase.config";
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, userCredential => {
			setUser(userCredential);
		})
		return () => unsubscribe();
	}, [])
	
	const createUser = (email, password) => {
		setLoading(false);
		return createUserWithEmailAndPassword(auth, email, password);
	}
	
	const loginUser = (email, password) => {
		setLoading(false);
		return signInWithEmailAndPassword(auth, email, password);
	}
	
	const logoutUser = () => {
		setLoading(false);
		return signOut(auth);
	}
	
	const authValue = {
		user,
		loading, 
		setLoading,
		createUser,
		loginUser,
		logoutUser,
	}
	
	return <AuthContext.Provider value={ authValue }>
		{ children }
	</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}
