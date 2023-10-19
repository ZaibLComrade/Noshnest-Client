import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useBrands from "../../hooks/useBrands";

const imgLinks = [
	"https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg",
	"https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg",
	"https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg",
]

// https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg
// https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg
// https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg


const createSlider = (contents, idx) => {
	return (
		<SplideSlide key={ idx }>
			<img className="object-cover w-full h-full" src={ contents }/>
		</SplideSlide>
	);
};

export default function Slider() {
	const brands = useBrands();
	console.log(brands);
	// const imgArr = brands[5].advertizement_imgs;
	
	return (
		<div className="relative z-[1] overflow-hidden">
			{/* <div className="absolute xl:top-[100px] -top-[10px] lg:top-[70px] md:top-[0px] z-[1] text-center w-full h-full"> */}
			{/* </div> */}
			<Splide
				hasTrack={ false }
				aria-label="Testimonials"
				options= {{
					rewind: true,
					type: "fade",
					height: "100vh",
					width: "100%",
				}}
			>
				<SplideTrack>
				{imgLinks.map((elem, idx) =>
					createSlider(elem, idx)
				)}
				</SplideTrack>
			</Splide>
		</div>
	);
}
