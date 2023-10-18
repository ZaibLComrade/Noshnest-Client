export default function Banner() {
	return (
		<div className="">
			<div className="min-h-screen hero bg-base-200">
				<div className="flex-col hero-content lg:flex-row">
					<img
						src="https://picsum.photos/3000"
						className="max-w-sm rounded-lg shadow-2xl"
					/>
					<div>
						<h1 className="text-5xl font-bold">Box Office News!</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
}
