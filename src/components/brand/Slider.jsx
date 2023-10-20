import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {useLoaderData} from "react-router-dom";

export default function Slider() {
	const { brandInfo } = useLoaderData();
	const { advertizement_imgs } = brandInfo;
	
	return (
		<div className="relative z-[1] overflow-hidden">
			<div className="absolute xl:top-[100px] -top-[10px] lg:top-[70px] md:top-[0px] z-[1] text-center w-full h-full">
			</div>
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
							<div className="absolute w-full h-full bg-black/60"></div>
							<img 
								src={ elem }
								className="object-cover w-full h-full"
							/>
							<div className="absolute text-center text-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<p data-aos="fade-up" id="trigger-aos" className="mb-5 text-lg md:text-2xl lg:text-3xl font-dancing-script"></p>
							</div>
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


