import { Link } from "react-router-dom";
import useBrands from "../../hooks/useBrands";

export default function Brands() {
	const brands = useBrands();
	
	return <div className="container p-4 mx-auto space-y-6">
		<div className="mx-auto w-max"><span className="text-6xl">Brands</span></div>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{
				brands.map(brand => <div key={ brand.id }>
					<Link to={`/products/${brand.id}`} className="shadow-xl hover:shadow-2xl rounded-2xl">
						<figure className="h-[300px]">
							<img src={ brand.brand_img } className="object-cover w-full h-full rounded-2xl"/>
						</figure>
						<h2 className="py-6 mx-auto text-2xl w-max">{ brand.brand_name }</h2>
					</Link>
				</div>)
			}
		</div>
	</div>
}
