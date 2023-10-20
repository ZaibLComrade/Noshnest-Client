import {useLoaderData} from "react-router-dom"
import Swal from "sweetalert2";
import useServer from "../../hooks/useServer";
import { useState } from "react";
import useBrands from "../../hooks/useBrands";

export default function ProductUpdate() {
	const productData = useLoaderData();
	const server = useServer();
	const [productRating, setProductRating] = useState(0)
	const brands = useBrands();
	
	const handleInput = e => {
		e.preventDefault();
		
		const form = e.target;
		const newProduct = {
			name: form.name.value,
			brand_name: form.brand.value,
			type: form.type.value,
			price: form.price.value,
			short_description: form.description.value,
			img: form.photoURL.value,
			rating: productRating,
		}
		
		Swal.fire({
			title: "Are you sure?",
			text: "You can't revert changes",
			icon: "warning",
			confirmButtonText: "Update",
			showDenyButton: true,
			denyButtonText: "Cancel",
		}).then(resolve => {
			if(resolve.isDenied) return;
			else {
				fetch(`${server}/products/${productData._id}`, {
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(newProduct),
				})
				.then(response => response.json())
				.then(result => {
					if(result.acknowledged) {
						Swal.fire({
							title: 'Added!',
							text: 'Item has been updated successfully',
							icon: 'success',
							confirmButtonText: 'Cool'
						})
					}
				})
			}
		})
	}
	
	return <div className="container mx-auto py-[70px] space-y-6">
		<h1 className="mx-auto text-3xl md:text-5xl w-max">Update Product</h1>
		<div className="mb-[120px] bg-custom-white-1">
			<form onSubmit={ handleInput } className="p-6 mx-auto md:w-[70%] gap-4 grid grid-cols-1 md:grid-cols-2">
				{/* Product Name */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Product Name</span>
					</label>
					<input type="text" defaultValue={ productData.name } name="name" placeholder="Enter product name" className=" input input-bordered" required/>
				</div>
				
				{/* Type */}
				<div className=" form-control">
					<label className="label">
						<span className="label-text">Type</span>
					</label>
					<input type="text" defaultValue={ productData.type } name="type" placeholder="Enter product type" className=" input input-bordered"/>
				</div>
				
				{/* Product price */}
				<div className=" form-control">
					<label className="label">
						<span className="label-text">Price</span>
					</label>
					<input type="text" defaultValue={ productData.price } name="price" placeholder="Enter product price" className=" input input-bordered"/>
				</div>
				
				<div className="form-control">
					<label className="label">
						<span className="label-text">Rating</span>
					</label>
					<div className="pt-1 rating rating-lg rating-half" onChange={ e => setProductRating(e.target.value) }>
						<input type="radio" name="rating" value="0.0" className="rating-hidden" defaultChecked={ (productData.rating >= 0.0) && true }/>
						<input type="radio" name="rating" value="0.5" className="bg-green-500 mask mask-star-2 mask-half-1"  defaultChecked={ (productData.rating >= 0.5) && true } />
						<input type="radio" name="rating" value="1.0" className="bg-green-500 mask mask-star-2 mask-half-2"  defaultChecked={ (productData.rating >= 1.0) && true } />
						<input type="radio" name="rating" value="1.5" className="bg-green-500 mask mask-star-2 mask-half-1"  defaultChecked={ (productData.rating >= 1.5) && true } />
						<input type="radio" name="rating" value="2.0" className="bg-green-500 mask mask-star-2 mask-half-2"  defaultChecked={ (productData.rating >= 2.0) && true } />
						<input type="radio" name="rating" value="2.5" className="bg-green-500 mask mask-star-2 mask-half-1"  defaultChecked={ (productData.rating >= 2.5) && true } />
						<input type="radio" name="rating" value="3.0" className="bg-green-500 mask mask-star-2 mask-half-2"  defaultChecked={ (productData.rating >= 3.0) && true } />
						<input type="radio" name="rating" value="3.5" className="bg-green-500 mask mask-star-2 mask-half-1"  defaultChecked={ (productData.rating >= 3.5) && true } />
						<input type="radio" name="rating" value="4.0" className="bg-green-500 mask mask-star-2 mask-half-2"  defaultChecked={ (productData.rating >= 4.0) && true } />
						<input type="radio" name="rating" value="4.5" className="bg-green-500 mask mask-star-2 mask-half-1"  defaultChecked={ (productData.rating >= 4.5) && true } />
						<input type="radio" name="rating" value="5.0" className="bg-green-500 mask mask-star-2 mask-half-2"  defaultChecked={ (productData.rating >= 5.0) && true } />
					</div>
				</div>
				
				<div className="col-span-1 space-y-4 md:col-span-2">
					{/* Short Description */}
					<div className="w-full form-control">
						<label className="label">
							<span className="label-text">Short Description</span>
						</label>
						<textarea type="text" defaultValue={ productData.short_description } name="description" placeholde="Short description" className="w-full pl-4 pt-2 h-[80px] input input-bordered"/>
					</div>
					
					{/* Photo */}
					<div className="w-full form-control">
						<label className="label">
							<span className="label-text">Photo</span>
						</label>
						<input type="text" defaultValue={ productData.img } name="photoURL" placeholder="Enter photo URL" className="w-full input input-bordered"/>
					</div>
					
					{/* Brand name */}
					<div className="w-full form-control">
						<label className="label">
							<span className="label-text" required>Brand Name</span>
						</label>
						<div className="grid max-sm:grid-cols-1 grid-cols-2">
						{
							brands.map(brand => <span key={brand._id} className="flex items-center gap-1">
								<input id={ brand.id } type="radio" name="brand" defaultChecked={brand.brand_name === productData.brand_name} value={ brand.brand_name } className="radio radio-xs" required/>
								<label htmlFor={ brand.id } className="label">
									<span className="label-text">{ brand.brand_name }</span>
								</label>
							</span>)
						}
						</div>
					</div>
				</div>
				{/* Submit */}
				<div className="mx-auto mt-6 w-max col-span-1 md:col-span-2">
					<input type="submit" value="Update Product" className="w-full btn hover:bg-custom-white-2 border-custom-coffee-2 bg-custom-coffee-1 input-bordered"/>
				</div>
			</form>
		</div>
	</div>
}
