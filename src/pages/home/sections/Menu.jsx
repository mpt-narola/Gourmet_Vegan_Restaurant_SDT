import FoodItemMenu from "../../../components/FoodItemMenu";
import { foodMenuTypeList } from "../../../utils/constants";

const Menu = () => {
	return (
		<div className="min-h-screen h-max py-5 bg-primary text-white flex items-center">
			<div className="w-11/12 max-w-[88rem] 2xl:max-w-[100rem] min-h-[calc(100vh-56px)] h-full mx-auto flex flex-col gap-3 xl:gap-10 items-center justify-center">
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
				<div className="w-full flex items-center justify-between">
					<div className="w-full sm:w-[56%] lg:w-[30%] xl:w-1/3">
						<FoodItemMenu />
					</div>
					<div className="hidden sm:block h-80 md:h-96 xl:h-[30rem]">
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
