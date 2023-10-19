import {useLoaderData} from "react-router-dom"

export default function Cart() {
	const cart = useLoaderData();
	console.log(cart);
	return <div>
		Cart
	</div>
}
