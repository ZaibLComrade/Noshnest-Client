import {useLoaderData} from "react-router-dom"
import { Link } from "react-router-dom";

export default function ProductPage() {
	const products = useLoaderData();
	console.log(products);
	return <div>
		<div className="container p-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
			{
				products.map(product => <div key={ product._id } className="flex flex-col items-center text-center lg:text-left rounded-xl lg:flex-row bg-neutral">
						<div className="h-[300px] w-[200px] p-4">
							<img src={ product.img } className="object-cover w-full h-full"/>
						</div>
					<div className="flex flex-col justify-between p-4 lg:h-full gap-6">
							<div>
							<h3><span>Name:</span> <span>{ product.name }</span></h3>
							<p><span>Type:</span> <span>{ product.type }</span></p>
							<p><span>Brand:</span> <span>{ product.brand_name }</span></p>
							<p><span>Rating:</span> <span>{ product.rating }</span></p>
							<p><span>Description:</span> <span>{ product.short_description }</span></p>
							<p><span>Price:</span> <span>{ product.price } $</span></p>
							</div>
							<div className="flex justify-evenly">
								<Link>
									<button className="btn btn-primary">Details</button>
								</Link>
								<Link>
									<button className="btn btn-primary">Update</button>
								</Link>
							</div>
						</div>
				</div>)
			}
		</div>
	</div>
}


