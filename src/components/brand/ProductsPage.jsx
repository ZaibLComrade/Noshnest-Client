import {useLoaderData} from "react-router-dom"
import { Link } from "react-router-dom";
import BrandsProvider from "../../providers/BrandsProvider";
import Slider from "./Slider";

export default function ProductPage() {
	const { productInfo: products } = useLoaderData();
	return <div className="space-y-16">
		<BrandsProvider>
			<Slider/>
		</BrandsProvider>
		<div className="space-y-6">
			<h1 className="mx-auto text-5xl w-max">Products</h1>
			<div className="container p-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
				{
					products.length ? products.map(product => <div key={ product._id } className="items-center text-center grid grid-cols-1 md:grid-cols-2 lg:text-left rounded-xl bg-neutral">
						<div className="h-[300px] w-full rounded-lg p-4">
							<img src={ product.img } className="object-contain w-full h-full rounded-lg md:object-cover"/>
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
									<Link to={`/products/details/${product._id}`}>
										<button className="btn btn-primary">Details</button>
									</Link>
									<Link to={ `/products/update/${product._id}` }>
										<button className="btn btn-primary">Update</button>
									</Link>
								</div>
							</div>
					</div>) :
					<div className="mx-auto col-span-2 w-max">
						<p className="text-3xl">Products not available. Please try again later</p>
					</div>
				}
			</div>
		</div>
	</div>
}


