import { foodMenuItemsList } from "../utils/constants";

const FoodItemMenu = () => {
	return (
		<div className="divide-y divide-dashed">
			{foodMenuItemsList.map((item) => (
				<div
					key={`food-menu-item-${item.id}`}
					className="flex justify-between py-4"
				>
					<div>
						<p className="font-semibold">{item.name}</p>
						<p className="text-xs">{item.description}</p>
					</div>
					<div className="font-semibold">{item.price}</div>
				</div>
			))}
		</div>
	);
};

export default FoodItemMenu;
