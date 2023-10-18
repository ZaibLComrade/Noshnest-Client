import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";

export  default function Root() {
	return <div>
		<Navbar/>
		<Outlet/>
	</div>
}
