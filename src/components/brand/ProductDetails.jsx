import {useLoaderData} from "react-router-dom"

export default function ProductDetails() {
	const data = useLoaderData();
	console.log(data);
	return <div>
		Product Details
	</div>
}
