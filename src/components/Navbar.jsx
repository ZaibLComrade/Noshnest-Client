import { NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi"

const listItems = (
	<>
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/othes">Others</NavLink></li>
		<li><NavLink to="/new">Add Product</NavLink></li>
	</>
);

export default function Navbar() {
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
				<ul className="px-1 menu menu-horizontal">
					{ listItems }
				</ul>
			</div>
			<div className="navbar-end space-x-3 md:space-x-6">
				<div className="card-actions">
					<button className="">
						<PiShoppingCart className="text-2xl md:text-3xl"/>
					</button>
				</div>
				<div className="items-center hidden md:flex gap-4">
					<a className="btn">Login</a>
					<div className="flex items-center gap-2">
						<p>User Name</p>
						<div className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://picsum.photos/50" className="object-cover w-full h-full" />
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="dropdown md:hidden dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://picsum.photos/50" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
		<li><a>User Name</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
				</div>
			</div>
		</div>
	);
}
