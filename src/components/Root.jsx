import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "./LoadingScreen";
import Headroom from "react-headroom";

export  default function Root() {
	const { loading } = useAuth();
	if(loading) return <LoadingScreen/>
	return <div>
		<Headroom>
			<Navbar/>
		</Headroom>
		<Outlet/>
	</div>
}
