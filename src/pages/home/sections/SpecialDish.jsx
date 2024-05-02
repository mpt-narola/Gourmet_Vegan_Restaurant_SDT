import Ratings from "../../../components/Ratings";
import { specialDishList } from "../../../utils/constants";

const SpecialDish = () => {
	return (
		<div className="min-h-screen h-max py-10">
			<div className="w-11/12 max-w-[88rem] 2xl:max-w-[100rem] min-h-[calc(100vh-56px)] mx-auto flex flex-col items-center justify-center">
				<h2 className="text-3xl lg:text-4xl xl:text-5xl font-secondary my-5">
					Our Special Dish
				</h2>
				<p className="xl:leading-8">
					Etiam hendrerit nec ipsum eu dictum. Nulla facilisi. Ut quis laoreet
					arcu, nec vehicula eros.
				</p>
				<div className="flex flex-wrap justify-evenly gap-y-3 mt-5 md:mt-10">
					{specialDishList.map((item) => (
						<div
							key={`special-list-item-${item.id}`}
							className="bg-white shadow-lg p-4 flex flex-col justify-between w-[48%] lg:w-[23%]"
						>
							<div className="relative">
								<div
									className={`absolute right-0 z-10 p-2 rounded-full border-2 border-secondary cursor-pointer ${
										item.isFavorite ? "" : "hover:bg-secondary"
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
									className="h-36 lg:h-48 m-auto"
								/>
								<p className="font-semibold text-lg">{item.name}</p>
								<p className="my-2 hidden md:block">{item.description}</p>
							</div>
							<div className="mt-3">
								<Ratings ratingValue={item.ratings} />
								<div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-1 justify-between items-center mt-2">
									<p className="text-xl md:text-2xl font-bold">{item.price}</p>
									<button className="primary">Add to cart</button>
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
