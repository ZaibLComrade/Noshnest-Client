export default function Subscribe() {
	return <div>
		<div className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden sm:p-12">
			<div className="absolute w-full h-full">
				<img className="object-cover w-full h-full" src="https://i.postimg.cc/bNnQLpmq/newsletter-min.jpg"/>
			</div>
			<h1 className="absolute z-10 text-5xl text-black lg:text-7xl top-20">Subscribe</h1>
			<div className="z-10 w-full max-w-4xl border-2 border-black bg-black/60 rounded-md p-14">
				<div className="flex flex-col items-center">
					<span className="px-2 py-px text-sm text-yellow-800 bg-yellow-100 rounded-lg -rotate-1">More than 1600 subscribers join us daily</span>
					<h3 className="max-w-2xl mt-2 text-2xl font-bold leading-tight text-center sm:text-3xl md:text-4xl md:leading-tight">Subscribe to our newsletter to keep getting latest products updates</h3>
					<form action="" className="flex flex-col items-center w-full max-w-md mx-auto mt-4 gap-3 sm:flex-row sm:gap-0">
						<input type="email" name="email" id="email" className="px-3 py-3 border-2 border-gray-300 rounded grow focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Email Address" />
						<button type="submit" className="px-5 py-4 font-bold text-white rounded border-emerald-500 bg-emerald-500 btn sm:rounded-l-none sm:rounded-r-md">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</div>
}
