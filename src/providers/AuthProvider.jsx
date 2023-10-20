import {createContext, useEffect, useState} from "react";
import PropTypes from "prop-types";
import auth from "../config/firebase.config.js";
import useServer from "../hooks/useServer";
import { 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	updateProfile,
	signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
	const server = useServer();
	const [userId, setUserId] = useState(null);
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, userCredential => {
			setUser(userCredential);
			if(userCredential) {
				fetch(`${server}/users/${userCredential.email}`)
					.then(response => response.json())
					.then(result => setUserId(result));
			} else {
				setUserId(null);
			}
			setLoading(false);
		})
		return () => unsubscribe();
	}, [server])
	
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
		userId,
		setUserId,
		setUser,
		loading, 
		setLoading,
		createUser,
		loginUser,
		logoutUser,
		updateProfile,
	}
	
	return <AuthContext.Provider value={ authValue }>
		{ children }
	</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}
