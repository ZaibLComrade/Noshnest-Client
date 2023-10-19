import {useState} from "react";
import {useLoaderData} from "react-router-dom"
import { PiShoppingCart } from "react-icons/pi";

export default function ProductDetails() {
	const [quantity, setQuantity] = useState(0);
	const { img, name, short_description, type, brand_name, price } = useLoaderData();
	
	const increment = () => {
		setQuantity(parseFloat(quantity + 1));
	}
	
	const decrement = () => {
		const val = parseFloat(quantity - 1);
		console.log(val);
	}
	
	const handleNumber = e => {
		const inpValue = e.target.value;
		if(e.target.value -1 <= -2) return
		setQuantity(inpValue);
	}
	
	return <div className="container mx-auto">
		<div className="flex">
			<div className="h-[500px] shrink-0 w-[400px]">
				<img className="object-contain w-full h-full" src={ img }/>
			</div>
			<div className="p-4 grow space-y-12">
				<div className="text-center space-y-4">
					<h2 className="text-4xl">{ name }</h2>
					<p>{ short_description }</p>
					<hr className=""/>
				</div>
				<div className="flex items-center justify-around">
					<div className="h-full p-12 text-2xl grow space-y-6">
						<div>
							<p><span>Type:</span> <span>{ type }</span></p>
							<p><span>Brand:</span> <span>{ brand_name }</span></p>
						</div>

					</div>
					<div className="grow space-y-4">
						<div className="flex items-center gap-4">
							<p>Quantity:</p>
							<div>
<div className="w-32 h-10 custom-number-input">
  <div className="relative flex flex-row w-full h-10 mt-1 bg-transparent rounded-lg">
    <button onClick={ decrement } className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400">
      <span className="m-auto text-2xl font-thin" onClick={ () => setQuantity(parseFloat(quantity - 1)) }>−</span>
    </button>
	  <input type="number" onChange={ handleNumber } className="flex items-center w-full font-semibold text-center text-gray-700 bg-gray-300 outline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default" name="custom-input-number" value={ (quantity >= 0) && quantity }></input>
  <button onClick={ increment } className="w-20 h-full text-gray-600 bg-gray-300 rounded-r cursor-pointer hover:text-gray-700 hover:bg-gray-400">
	<span className="m-auto text-2xl font-thin">+</span>
  </button>
	</div>
</div>
							</div>
						</div>
						<div className="text-3xl">
							<p><span>Price:</span> <span>{ price } $</span></p>
						</div>
						<div>
							<p className="text-2xl">
								<span>Total: </span>
								<span>{ (quantity * price).toFixed(2) } $</span>
							</p>
						</div>
						<div className="">
							<button className="btn btn-primary"><span className="text-xl"><PiShoppingCart/></span>Add to cart</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div></div>
	</div>
}
