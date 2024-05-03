import FoodItemMenu from "../../../components/FoodItemMenu";
import { foodMenuTypeList } from "../../../utils/constants";

const Menu = () => {
	return (
		<div className="min-h-screen h-max py-5 bg-primary text-white flex items-center">
			<div className="container w-11/12 sm:w-10/12 xl:w-10/12 min-h-[calc(100vh-56px)] h-full mx-auto flex flex-col gap-3 xl:gap-10 items-center justify-center">
				<h2 className="text-3xl lg:text-4xl 2xl:text-[2.5rem] font-secondary">
					Our Menu
				</h2>
				<div className="flex divide-x divide-muted">
					{foodMenuTypeList.map((item) => (
						<div
							key={`food-menu-type-${item.id}`}
							className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 text-lg hover:bg-secondary hover:text-primary cursor-pointer font-semibold flex items-center ${
								item.isActive
									? "bg-secondary hover:bg-muted hover:text-white text-primary"
									: "bg-muted"
							}`}
						>
							{item.name}
						</div>
					))}
				</div>
				<div className="w-full flex items-center justify-between">
					<div className="w-full sm:w-[56%] lg:w-[30%] xl:w-1/3">
						<FoodItemMenu />
					</div>
					<div className="hidden px-2 sm:block h-80 md:h-96 lg:h-[26rem] xl:h-[28rem]">
						<img src="/images/menu-1.png" alt="image" className="h-full" />
					</div>
					<div className="hidden lg:block w-[30%] xl:w-1/3">
						<FoodItemMenu />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
