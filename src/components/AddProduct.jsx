import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function AddProduct() {
	const handleInput = e => {
		e.preventDefault();
		const form = e.target;
		const newCoffee = {
			name: form.name.value,
			chef: form.chef.value,
			supplier: form.supplier.value,
			taste: form.taste.value,
			category: form.category.value,
			details: form.details.value,
			photo: form.photoURL.value,
		}
		
		fetch("http://espresso-emporium-server-zaiblcomrade-zaib-khans-projects.vercel.app/coffees", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(newCoffee),
		})
		.then(response => response.json())
		.then(result => {
			if(result.acknowledged) {
				Swal.fire({
					title: 'Added!',
					text: 'Item has been added successfully',
					icon: 'success',
					confirmButtonText: 'Cool'
				}).then(response => {
					if(response.isConfirmed) {
						window.location.reload();
					}
				})
			}
		})
	}
	
	return <div className="container mx-auto py-[70px] space-y-6">
		<h1 className="mx-auto text-5xl w-max">Add Product</h1>
		<div className="mb-[120px] bg-custom-white-1">
			<form onSubmit={ handleInput } className="p-6 mx-auto md:w-[70%] gap-6 grid grid-cols-1 md:grid-cols-2">
				{/* Product Name */}
				<div className="form-control">
					<label className="label">
						<span className="label-text">Product Name</span>
					</label>
					<input type="text" name="name" placeholder="Enter product name" className=" input input-bordered" required/>
				</div>
				
				{/* Brand name */}
				<div className=" form-control">
					<label className="label">
						<span className="label-text" required>Brand Name</span>
					</label>
					<input type="text" name="brand" placeholder="Enter brand name" className=" input input-bordered"/>
				</div>
				
				{/* Type */}
				<div className=" form-control">
					<label className="label">
						<span className="label-text">Type</span>
					</label>
					<input type="text" name="type" placeholder="Enter product type" className=" input input-bordered"/>
				</div>
				
				{/* Product price */}
				<div className=" form-control">
					<label className="label">
						<span className="label-text">Price</span>
					</label>
					<input type="text" name="price" placeholder="Enter product price" className=" input input-bordered"/>
				</div>
				
				<div className="col-span-1 md:col-span-2">
					{/* Short Description */}
					<div className="w-full form-control">
						<label className="label">
							<span className="label-text">Short Description</span>
						</label>
						<textarea type="text" name="description" placeholder="Short description" className="w-full pl-4 pt-2 h-[80px] input input-bordered"/>
					</div>
					
					{/* Photo */}
					<div className="w-full form-control">
						<label className="label">
							<span className="label-text">Photo</span>
						</label>
						<input type="text" name="photoURL" placeholder="Enter photo URL" className="w-full input input-bordered"/>
					</div>
					
					{/* Submit */}
					<div className="mx-auto mt-6 w-max">
						<input type="submit" value="Add Product" name="photo" className="w-full btn hover:bg-custom-white-2 border-custom-coffee-2 bg-custom-coffee-1 input-bordered"/>
					</div>
				</div>
			</form>
		</div>
	</div>
}
