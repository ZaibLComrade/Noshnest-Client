import BrandsProvider from "../../providers/BrandsProvider";
import Subscribe from "../Subscribe";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer"
import Offer from "./Offer";

export default function Home() {
	return <div>
		<Banner/>
		<Offer/>
		<BrandsProvider>
			<Brands/>
		</BrandsProvider>
		<Subscribe/>
		<Footer/>
	</div>
}


