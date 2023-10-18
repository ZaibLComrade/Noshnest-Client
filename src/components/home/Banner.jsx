import banner from "../../assets/banner.jpg"

export default function Banner() {
	return (
		<div className="min-h-screen hero bg-base-200" style={{ backgroundImage: `url('${ banner }')` }}>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="text-center hero-content">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Taste the World at Home</h1>
					<p className="py-6">International flavors, local comfort. Your culinary journey begins here</p>
					<button className="btn btn-primary">Order Now</button>
				</div>
			</div>
		</div>
	);
}
