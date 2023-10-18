import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const imgLinks = [
	"https://i.postimg.cc/tJmJVcvn/alessandro-d-antonio-qy4vrr2qi3-M-unsplash-min-min.jpg",
	"https://i.postimg.cc/tTps0WVJ/lucas-santos-JKa-KXJOIde-M-unsplash-min.jpg",
	"https://i.postimg.cc/sX4Z1wR5/maximilian-bruck-4-SKd-Rc-Y13j4-unsplash-min-min.jpg",
]

const createSlider = (contents, idx) => {
	const { name, position, testimonial, id, img } = contents;
	return (
		<SplideSlide key={ id }>
			<div className="absolute w-full h-full bg-black/60"></div>
			<img 
				src={ imgLinks[idx] }
				className="object-cover w-full h-full"
			/>
			<div className="absolute text-center text-secondary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<p id="trigger-aos" className="mb-5 text-lg md:text-2xl lg:text-3xl font-dancing-script">{ `"${testimonial}"` }</p>
				<div>
					<img 
						data-aos="zoom-in-up"
						data-aos-delay="400"
						data-aos-anchor="#trigger-aos"
						className="mx-auto xl:w-[80px] xl:h-[80px] w-[60px] h-[60px] object-cover mb-2 rounded-full" 
						src={img} 
						alt=""
					/>
					<h3 className="text-lg lg:text-xl xl:text-2xl font-playfair-display">{name}</h3>
					<p  className="text-sm lg:text-lg xl:text-xl font-lato">{position}</p>
				</div>
			</div>
		</SplideSlide>
	);
};

export default function Slider() {
	const [brands, setTestimonials] = useState([]);
	useEffect(() => {
		fetch("testimonials.json")
			.then((response) => response.json())
			.then((resource) => setTestimonials(resource))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="relative z-[1] mt-14 overflow-hidden">
			<div className="absolute xl:top-[100px] -top-[10px] lg:top-[70px] md:top-[0px] z-[1] text-center w-full h-full">
			<h2 className="mx-auto text-white font-playfair-display text-[180px]  w-max">&rdquo;</h2>
			</div>
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
				{testimonials.map((elem, idx) =>
					createSlider(elem, idx)
				)}
				</SplideTrack>
			</Splide>
		</div>
	);
}
