import { NavLink, Link, useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import useAuth from "../hooks/useAuth";

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

const dummyImage = "https://picsum.photos/50";

export default function Navbar() {
	const { user, logoutUser, userId } = useAuth();
	const navigate = useNavigate();
	return (
		<div className="navbar bg-base-100">
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
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{listItems}
					</ul>
				</div>
				<a className="text-xl normal-case btn btn-ghost">Nosh Nest</a>
			</div>
			<div className="hidden navbar-center lg:flex">
				<ul className="px-1 space-x-1 menu menu-horizontal">
					{listItems}
				</ul>
			</div>
			<div className="navbar-end space-x-3 md:space-x-6">
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
							{user?.displayName
								? user.displayName
								: "Not logged in"}
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
							<Link to="/login" className="btn btn-block">
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
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<a>
									{user?.displayName
										? user.displayName
										: "Not logged in"}
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
