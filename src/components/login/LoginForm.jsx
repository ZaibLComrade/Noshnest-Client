import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useServer from "../../hooks/useServer";
import Swal from "sweetalert2";

export default function RegisterForm() {
	const { loginUser, user, setUserId, setLoading } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const server = useServer();
	
	const handleSubmit = (e) => {
		e.preventDefault(); 
		
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		if (email === user?.email) {
			Swal.fire({
				title: "User already logged in",
				icon: "warning",
				confirmButtonText: "Close",
			}).then(() => {
				navigate("/");
			});
			return;
		}
		
		loginUser(email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				const update = {lastSignInTime: user?.metadata?.lastSignInTime};
				fetch(`${server}/users/${user.email}`, {
					method: "PATCH",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(update),
				});
				
				Swal.fire({
					title: "Successfully logged in",
					icon: "success",
					confirmButtonText: "Continue",
				}).then(() => {
					navigate(location?.state || "/");
					setLoading(false);
				});
			})
			.catch((err) => {
				Swal.fire({
					title: "Invalid email or password",
					icon: "error",
					confirmButtonText: "Close",
				}).then(() => {
					setLoading(false);
				});
			});
	};
	
	return (
		<div>
			{location.state && (
				<div className="mx-auto h-max w-max">
					<h1 className="text-5xl leading-[80px]">
						Login To Continue
					</h1>
				</div>
			)}
			<div className="flex-shrink-0 w-full max-w-sm pb-5 mx-auto border-red-500 shadow-2xl font-montserrat card bg-base-100">
				<form className="card-body" onSubmit={handleSubmit}>
					<h1 className="mx-auto text-3xl font-semibold w-max font-playfair-display">
						Login
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Email</span>
						</label>
						<input
							type="email"
							placeholder="email"
							name="email"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Password</span>
						</label>
						<input
							type="password"
							placeholder="password"
							name="password"
							className="input input-bordered"
							required
						/>
						<label className="label">
							<a
								href="#"
								className="label-text-alt link link-hover"
							>
								Forgot password?
							</a>
						</label>
					</div>
					<div className="mt-6 form-control">
						<button className="btn btn-primary">Login</button>
					</div>
				</form>
				<div className="mx-auto text-sm text-center md:text-base">
					<p>
						Don't have an account?{" "}
						<Link
							className="text-blue-600 underline hover:text-blue-500"
							to="/register"
						>
							Register
						</Link>{" "}
						here
					</p>
				</div>
			</div>
		</div>
	);
}
