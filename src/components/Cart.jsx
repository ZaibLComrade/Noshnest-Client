import {useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import useServer from "../hooks/useServer";
import Swal from "sweetalert2";

export default function Cart() {
	const [cart, setCart] = useState(useLoaderData());
	const [subtotal, setSubtotal] = useState(cart.reduce((acc, curr) => acc + curr.total , 0));
	const userId = useParams();
	const server = useServer();
	
	const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
	const tax = 0;
	const discount = 0;
	const shipping = 5;
	const totalPrice = subtotal + tax + discount + shipping
	
	const handleDelete = idx => {
		fetch(`${server}/cart/${userId.id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ idx }),
		}).then(response => response.json())
			.then(result => {
				setCart(result);
				setSubtotal(result.reduce((acc, curr) => acc + curr.total , 0))
				Swal.fire({
					title: "Deleted item from cart",
					icon: "success",
					confirmButtonText: "Close",
				})
			});
	}
	
	return <div className="container mx-auto lg:flex max-lg:space-y-8 px-4 flex-row-reverse gap-4 py-[70px]">
		<div className="mx-auto h-max md:min-w-[300px] max-w-[400px] md:w-[400px] rounded-xl border">
			<div className="p-4 space-y-8">
				<h2 className="mx-auto text-5xl w-max">My Cart</h2>
				<div className=" space-y-6">
					<div className="text-2xl text-center grow">
						<p><span>Products:</span> <span>{ cart.length }</span></p>
						<p><span>Quantity:</span> <span>{ totalQuantity }</span></p>
					</div>
					<div className="text-right grow">
						<p className="grid grid-cols-2"><span className="text-left">Subtotal:</span> <span>{ subtotal.toFixed(2) } $</span></p>
						<hr/>
						<p className="grid grid-cols-2"><span className="text-left">Tax:</span> <span>{ tax.toFixed(2) } $</span></p>
						<hr/>
						<p className="grid grid-cols-2"><span className="text-left">Discount:</span> <span>{ discount.toFixed(2) } $</span></p>
						<hr/>
						<p className="grid grid-cols-2"><span className="text-left">Shipping:</span> <span>{ shipping.toFixed(2) } $</span></p>
						<hr/>
						<p className="grid grid-cols-2"><span className="text-left">Total:</span> <span>{ totalPrice.toFixed(2) } $</span></p>
					</div>
					<div className="w-full"><button className="block mx-auto btn">Proceed to payment</button></div>
				</div>
			</div>
		</div>
		<div className="bg-neutral rounded-xl grow">
			{
				cart.map((item, idx) => <div key={ idx }>
					<div className="p-4 grid-cols-1 md:grid-cols-3 grid">
						<div className="items-center text-center col-span-2 md:flex justify between lg:text-left ">
							
							<div className="md:w-[250px] max-md:mx-auto shrink-0 h-[250px] p-4 rounded-lg">
								<img src={ item.img } className="object-contain w-full h-full rounded-lg md:object-cover"/>
							</div>
							<div className="flex flex-col justify-between p-4 lg:h-full gap-6">
								<div>
									<h3><span>Name:</span> <span>{ item.name }</span></h3>
									<p><span>Type:</span> <span>{ item.type }</span></p>
									<p><span>Brand:</span> <span>{ item.brand_name }</span></p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center h-full text-lg">
							<div className="text-center">
								<p><span>Price:</span> <span>{ item.price } $</span></p>
								<p><span>Quantity:</span> <span>{ item.quantity }</span></p>
								<p className="text-2xl"><span>Total:</span> <span>{ item.total } $</span></p>
								<button onClick={ () => handleDelete(idx) } className="mt-4 btn">Delete</button>
							</div>
						</div>
					</div>
					{(idx !== cart.length -1) && <hr className="mx-6"/>}
				</div>)
			}
		</div>
	</div>
}
