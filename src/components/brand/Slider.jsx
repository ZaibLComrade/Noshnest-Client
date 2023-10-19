import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {useLoaderData} from "react-router-dom";

// const imgLinks = [
// 	"https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg",
// 	"https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg",
// 	"https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg",
// ]

// https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg
// https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg
// https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg

export default function Slider() {
	const { brandInfo } = useLoaderData();
	const { advertizement_imgs } = brandInfo;
	
	return (
		<div className="relative z-[1] overflow-hidden">
			{/* <div className="absolute xl:top-[100px] -top-[10px] lg:top-[70px] md:top-[0px] z-[1] text-center w-full h-full"> */}
			{/* </div> */}
			<Splide
				hasTrack={ false }
				aria-label="Testimonials"
				options= {{
					autoplay: true,
					rewind: true,
					type: "loop",
					pauseOnHover: false,
					height: "100vh",
					width: "100%",
				}}
			>
				<div className="relative">
					<SplideTrack>
					{advertizement_imgs.map((elem, idx) =>
						<SplideSlide key={ idx }>
							<img className="object-cover w-full h-full" src={ elem }/>
						</SplideSlide>
					)}
					</SplideTrack>
				</div>
				<div className="splide__progress">
					<div className="splide__progress__bar" />
				</div>
			</Splide>
		</div>
	);
}
