import { GrLocation } from "react-icons/gr";

const Hero = () => {
	return (
		<div
			className="h-screen w-full text-white"
			style={{
				background: "no-repeat left / cover url('/images/hero.svg')",
				// backgroundSize: "100% 100vh",
			}}
		>
			<div className="container w-11/12 sm:w-10/12 xl:w-10/12 h-[calc(100vh-56px)] mx-auto flex items-center">
				<div className="md:w-4/5 lg:w-2/3 xl:w-3/5">
					<h1 className="text-4xl lg:text-5xl xl:text-7xl tracking-tight font-secondary">
						Welcome To The <br />
						<span className="text-3xl lg:text-4xl tracking-normal xl:text-5xl">
							Gourmet Vegan Restaurant
						</span>
					</h1>
					<p className="my-10 xl:leading-7 max-w-2xl">
						Every university has a website or mobile ordering application that
						provides information about the menus of university cafeterias,
						franchise dining locations, and university-based dining spots.
						However, this concept takes things a step further by utilizing the
						macronutrient data provided by the producers.
					</p>
					<div className="text-sm lg:text-base flex gap-2 lg:gap-7">
						<button className="primary flex items-center gap-1">
							<GrLocation fontSize={20} />
							Book Your Table
						</button>
						<button>Explore Our Menu</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
