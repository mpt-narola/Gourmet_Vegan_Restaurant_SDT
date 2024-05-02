const Newsletter = () => {
	return (
		<div className="mb-20 h-80 lg:h-96 xl:h-[28rem]">
			<div
				className="text-white w-11/12 h-full max-w-[88rem] 2xl:max-w-[100rem] mx-auto flex items-center"
				style={{
					background: "no-repeat left / cover url('/images/newsletter-bg.png')",
					// backgroundSize: "100% 100vh",
				}}
			>
				<div className="w-11/12 md:w-5/6 lg:w-[70%] xl:w-3/5 mx-auto text-center">
					<h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-secondary">
						Get Our Promo Code by Subscribing To Our Newsletter
					</h2>
					<div className="relative w-full sm:w-3/4 mx-auto my-5 md:my-10">
						<input
							type="text"
							placeholder="Enter your email"
							className="p-4 mb-2 md:mb-0 w-full text-primary"
						/>
						<button className="primary md:absolute right-2 top-2">
							Subscribe
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
