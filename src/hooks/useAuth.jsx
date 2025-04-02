import {useContext} from "react";
import {AuthContext} from "../providers/AuthProvider";

export default function useAuth() {
	const provider = useContext(AuthContext);
	return provider;
}
