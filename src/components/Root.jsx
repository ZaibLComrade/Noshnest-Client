import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "./LoadingScreen";

export  default function Root() {
	const { loading } = useAuth();
	if(loading) return <LoadingScreen/>
	return <div>
		<Navbar/>
		<Outlet/>
	</div>
}
