import PropTypes from "prop-types";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import LoadingScreen from "./components/LoadingScreen";

export default function PrivateRoute({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();
	
	if(loading) return <LoadingScreen/>
	
	if(user) return children; 
	
	console.log(location.pathname)
	return <Navigate state={ location.pathname } to="/login"/>
}

PrivateRoute.propTypes = {
	children: PropTypes.node,
}
