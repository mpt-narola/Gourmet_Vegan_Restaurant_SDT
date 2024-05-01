const Hero = () => {
	return (
		<div
			className="h-screen w-full text-white"
			style={{
				background: "no-repeat left / cover url('/images/hero.svg')",
				// backgroundSize: "100% 100vh",
			}}
		>
			<div className="w-11/12 max-w-[88rem] 2xl:max-w-[100rem] h-[calc(100vh-56px)] mx-auto flex items-center">
				<div className="md:w-4/5 lg:w-3/5">
					<h1 className="text-4xl lg:text-5xl xl:text-7xl font-secondary mb-5">
						Welcome To The{" "}
						<span className="text-3xl lg:text-4xl xl:text-5xl">
							Gourmet Vegan Restaurant
						</span>
					</h1>
					<p className="my-12 xl:leading-8 max-w-2xl">
						Every university has a website or mobile ordering application that
						provides information about the menus of university cafeterias,
						franchise dining locations, and university-based dining spots.
						However, this concept takes things a step further by utilizing the
						macronutrient data provided by the producers.
					</p>
					<div className="text-sm lg:text-base flex gap-2 lg:gap-7">
						<button className="primary flex items-center gap-1">
							<img src="/images/icons/location-icon.svg" alt="icon" />
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
