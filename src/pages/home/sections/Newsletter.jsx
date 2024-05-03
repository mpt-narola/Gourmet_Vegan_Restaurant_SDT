const Newsletter = () => {
	return (
		<div className="mb-20 h-80 xl:h-96">
			<div
				className="text-white h-full container w-11/12 sm:w-10/12 xl:w-10/12 mx-auto flex items-center"
				style={{
					background: "no-repeat left / cover url('/images/newsletter-bg.png')",
					// backgroundSize: "100% 100vh",
				}}
			>
				<div className="w-11/12 md:w-5/6 lg:w-[70%] xl:w-1/2 mx-auto text-center">
					<h2 className="text-3xl lg:text-4xl 2xl:text-[2.5rem] font-secondary">
						Get Our Promo Code by Subscribing To Our Newsletter
					</h2>
					<div className="relative w-full sm:w-11/12 mx-auto my-5 md:my-10">
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
