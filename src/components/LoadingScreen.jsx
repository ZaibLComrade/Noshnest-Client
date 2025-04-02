import { CircleLoader, ClimbingBoxLoader, ClockLoader, HashLoader } from "react-spinners";

const loaderProps = {
	color: "#5AC2B0",
	number: 1,
}

const circleLoader = <CircleLoader
	color={loaderProps.color}
	loading={true}
	size={100}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={loaderProps.number}
/>

const climbingLoader = <ClimbingBoxLoader
	size={15}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const clockLoader = <ClockLoader
	size={100}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const hashLoader = <HashLoader
	size={100}
	loading={true}
	aria-label="Loading Spinner"
	data-testid="loader"
	number={ loaderProps.number }
	color={ loaderProps.color }
/>

const loaderArr = [
	clockLoader,
	climbingLoader,
	circleLoader,
	hashLoader,
];


export default function LoadingScreen() {
	let random = Math.floor((Math.random() * loaderArr.length));
	const currLoader = loaderArr[random];
	
	return <div className="fixed top-0 z-[1] w-screen h-screen bg-black/80">
	<div className="fixed z-[0] top-0 w-screen h-screen bg-primary/20"></div>
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			{ currLoader }
		</div>
	</div>
}
