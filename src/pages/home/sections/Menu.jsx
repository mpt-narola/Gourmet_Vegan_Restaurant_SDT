import FoodItemMenu from "../../../components/foodItemMenu";
import { foodMenuTypeList } from "../../../utils/constants";

const Menu = () => {
	return (
		<div className="h-screen max-h-full mt-48 sm:mt-40 pt-5 lg:pb-[42.5rem] lg:pt-20 xl:pt-5 bg-primary text-white">
			<div className="w-11/12 max-w-[88rem] 2xl:max-w-[100rem] h-[calc(100vh-56px)] mx-auto flex flex-col gap-3 xl:gap-10 items-center justify-between xl:justify-center">
				<h2 className="text-3xl lg:text-4xl xl:text-5xl font-secondary">
					Our Menu
				</h2>
				<div className="flex divide-x divide-muted">
					{foodMenuTypeList.map((item) => (
						<div
							key={`food-menu-type-${item.id}`}
							className={`px-4 py-2 hover:bg-secondary hover:text-primary cursor-pointer font-semibold flex items-center ${
								item.isActive
									? "bg-secondary hover:bg-muted hover:text-white text-primary"
									: "bg-muted"
							}`}
						>
							{item.name}
						</div>
					))}
				</div>
				<div className="h-4/5 xl:h-2/3 w-full flex items-center justify-between">
					<div className="w-full sm:w-[56%] lg:w-[30%] xl:w-1/3">
						<FoodItemMenu />
					</div>
					<div className="hidden sm:block h-2/3 lg:h-2/3 xl:h-full">
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
