const AboutChef = () => {
	return (
		<div className="h-[calc(100vh-56px)] w-full relative">
			<div className="absolute -top-12 md:-top-16 xl:-top-20 w-full flex justify-center">
				<img
					src="/images/best-quality.png"
					alt="logo"
					className="h-24 w-24 md:h-32 md:w-32 xl:h-40 xl:w-40"
				/>
			</div>
			<div className="w-11/12 max-w-[88rem] 2xl:max-w-[100rem] h-full pt-16 sm:pt-0 mx-auto flex flex-col sm:flex-row items-center justify-between">
				<img
					src="/images/about-1.png"
					alt="about"
					className="h-1/2 md:h-2/3 lg:h-1/2 xl:h-2/3 2xl:h-1/2"
				/>
				<div className="max-w-xl lg:max-w-md xl:max-w-2xl p-10">
					<h5 className="font-semibold mb-5">About Chef and Kitchen</h5>
					<h2 className="text-3xl lg:text-4xl xl:text-5xl font-secondary">
						The Health Food For Wealthy Mood
					</h2>
					<p className="my-5 xl:my-8 xl:leading-8 max-w-2xl">
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum is that it has a more-or-less normal
						distribution.
					</p>
					<button className="primary">Learn More</button>
				</div>
				<div className="hidden lg:flex flex-col items-end gap-10 h-fit">
					<img
						src="/images/about-2.png"
						alt="about"
						className="h-32 xl:h-40 w-fit"
					/>
					<img
						src="/images/about-3.png"
						alt="about"
						className="h-40 xl:h-48 w-fit"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutChef;
