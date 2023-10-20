import { NavLink, Link } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";
import DarkImg from "../assets/nightmode.png"

const listItems = (
	<>
		<li>
			<NavLink to="/">Home</NavLink>
		</li>
		<li>
			<NavLink to="/register">Register</NavLink>
		</li>
		<li>
			<NavLink to="/products/new">Add Product</NavLink>
		</li>
	</>
);

const dummyImage = "https://i.postimg.cc/T2bdytT4/tmx6-W6-N-2696144912.png";

export default function Navbar({ setDark }) {
	const { user, logoutUser, userId } = useAuth();
	
	const handleToggle = e => {
		if(e.target.checked) setDark("dark");
		else setDark("light");
	}
	
	return (
		<div className="py-4 navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm font-montserrat font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{listItems}
					</ul>
				</div>
				<Link to="/" className="text-4xl normal-case font-playfair btn btn-ghost">Nosh Nest</Link>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 font-semibold space-x-1 font-montserrat menu menu-horizontal">
					{listItems}
				</ul>
			</div>
			<div className="navbar-end space-x-3 md:space-x-6">
				<div className="flex items-center gap-2">
					<div className="bg-white border rounded-full">
						<img src={ DarkImg } className="w-6 h-6"/>
					</div>
					<input type="checkbox" className="toggle" onChange={ handleToggle } />
				</div>
				<div className="card-actions">
					<Link state={ `/cart/${userId}` } to={userId ? `/cart/${userId}` : "/login" }>
						<button className="">
							<PiShoppingCart className="text-2xl md:text-3xl" />
						</button>
					</Link>
				</div>
				<div className="items-center hidden md:flex gap-2">
					<div className="flex items-center gap-2">
						<p>
							{user?.displayName && user.displayName}
						</p>
						<div className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img
									className="object-cover w-full h-full"
									src={
										user?.photoURL
											? user.photoURL
											: dummyImage
									}
								/>
							</div>
						</div>
					</div>
					<div>
						{user ? (
							<button
								onClick={logoutUser}
								className="btn btn-block"
							>
								Sign Out
							</button>
						) : (
							<Link to="/login" className="normal-case text-md btn font-montserrat btn-block">
								Login
							</Link>
						)}
					</div>
				</div>
				<div>
					<div className="dropdown md:hidden dropdown-end">
						<label
							tabIndex={0}
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									className="object-cover w-full h-full"
									src={
										user?.photoURL
											? user.photoURL
											: dummyImage
									}
								/>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content font-montserrat mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>
									{user?.displayName && user.displayName }
								</a>
							</li>
							<li>
								{user ? (
									<a onClick={logoutUser}>Sign Out</a>
								) : (
									<Link to="/login">Login</Link>
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

Navbar.propTypes = {
	setDark: PropTypes.func,
}
