export default function NotFound() {
	return <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
		<div className="max-w-[700px]">
			<h1 className="md:text-[300px] text-8xl">404</h1>
			<div className="space-y-4">
				<p className="text-2xl md:text-5xl">It looks like you're lost</p>
				<p className="text-lg">The page you're looking for doesn't exist</p>
			</div>
		</div>
	</div>
}
