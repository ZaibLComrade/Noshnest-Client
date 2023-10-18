import BrandsProvider from "../../providers/BrandsProvider";
import Banner from "./Banner";
import Brands from "./Brands";
import Footer from "./Footer"

export default function Home() {
	return <div>
		<Banner/>
		<BrandsProvider>
			<Brands/>
		</BrandsProvider>
		<Footer/>
	</div>
}


