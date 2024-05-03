import Ratings from "../../../components/Ratings";
import { specialDishList } from "../../../utils/constants";

const SpecialDish = () => {
	return (
		<div className="min-h-screen h-max py-10">
			<div className="container w-11/12 sm:w-10/12 xl:w-10/12 min-h-[calc(100vh-56px)] mx-auto text-primary flex flex-col items-center justify-center">
				<h2 className="text-3xl lg:text-4xl 2xl:text-[2.5rem] font-secondary my-3">
					Our Special Dish
				</h2>
				<p className="xl:leading-8">
					Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
					arcu, nec vehicula eros.
				</p>
				<div className="flex flex-wrap justify-between gap-y-3 mt-5 md:mt-10">
					{specialDishList.map((item) => (
						<div
							key={`special-list-item-${item.id}`}
							className="bg-white shadow-lg p-4 flex flex-col justify-between w-[48%] lg:w-[24%] group"
						>
							<div className="relative">
								<div
									className={`absolute right-0 z-10 p-2 rounded-full border-2 border-secondary cursor-pointer ${
										item.isFavorite ? "" : "group-hover:bg-secondary"
									}`}
								>
									<img
										src={
											item.isFavorite
												? "/images/icons/wishlist-icon-filled.png"
												: "/images/icons/wishlist-icon.png"
										}
										alt="icon"
									/>
								</div>
								<img
									src={item.image}
									alt="product"
									className="h-36 lg:h-48 xl:h-52 m-auto"
								/>
								<p className="font-semibold">{item.name}</p>
								<p className="my-2 hidden md:block text-sm">
									{item.description}
								</p>
							</div>
							<div className="mt-3">
								<div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-1 justify-between items-center mt-2">
									<p className="text-lg md:text-xl font-bold">{item.price}</p>
									<button className="primary hidden group-hover:block">
										Add to cart
									</button>
									<div className="group-hover:hidden h-[42px] grid">
										<Ratings ratingValue={item.ratings} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SpecialDish;
