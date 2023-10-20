import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "./LoadingScreen";
import Headroom from "react-headroom";
import {useState} from "react";

export  default function Root() {
	const [isDark, setIsDark] = useState("dark")
	const { loading } = useAuth();
	if(loading) return <LoadingScreen/>
	return <div data-theme={ isDark }>
		<Headroom>
			<Navbar setDark={ setIsDark }/>
		</Headroom>
		<Outlet/>
	</div>
}
