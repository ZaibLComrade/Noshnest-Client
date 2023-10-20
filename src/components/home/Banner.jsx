import banner from "../../assets/banner.jpg"

export default function Banner() {
	return (
		<div className="min-h-screen hero bg-base-200" style={{ backgroundImage: `url('${ banner }')` }}>
			<div className="hero-overlay bg-opacity-70"></div>
			<div className="text-center hero-content">
				<div className="max-w-md text-white">
					<h1 className="text-5xl font-bold font-playfair">Taste the World at Home</h1>
					<p className="py-6 font-lato">International flavors, local comfort. Your culinary journey begins here</p>
					<button className="text-lg normal-case btn btn-primary font-pacifico">Order Now</button>
				</div>
			</div>
		</div>
	);
}
