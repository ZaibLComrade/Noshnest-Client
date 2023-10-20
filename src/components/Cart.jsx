import {useLoaderData} from "react-router-dom"

export default function Cart() {
	const cart = useLoaderData();
	const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
	const tax = 0;
	const discount = 0;
	const totalPrice = cart.reduce((acc, curr) => acc + curr.total , 0) + tax + discount;
	console.log(cart);
	return <div className="container mx-auto py-[70px]">
		<div className="px-16 mx-auto ">
			<div className="p-6 border space-y-8">
				<h2 className="mx-auto text-5xl w-max">My Cart</h2>
				<div className="items-center justify-around md:flex">
					<div className="text-2xl text-center grow">
						<p><span>Products:</span> <span>{ cart.length }</span></p>
						<p><span>Quantity:</span> <span>{ totalQuantity }</span></p>
					</div>
					<div className="text-right grow">
						<p className="grid grid-cols-2"><span>Subtotal:</span> <span>{ totalPrice.toFixed(2) } $</span></p>
						<p className="grid grid-cols-2"><span>Tax:</span> <span>{ tax } $</span></p>
						<p className="grid grid-cols-2"><span>Discount:</span> <span>{ discount } $</span></p>
						<p className="grid grid-cols-4"><span></span> <span></span> <span></span> <hr/></p>
						<p className="grid grid-cols-2"><span>Total:</span> <span>{ totalPrice.toFixed(2) } $</span></p>
					</div>
				</div>
			</div>
		</div>
		<div>
		</div>
	</div>
}
