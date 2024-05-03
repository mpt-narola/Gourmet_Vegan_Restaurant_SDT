import { useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

import { servicesMenuList } from "../../../utils/constants";

const Services = () => {
	const elementRef = useRef(null);
	const [arrowDisable, setArrowDisable] = useState(true);

	const handleHorizantalScroll = (element, speed, distance, step) => {
		let scrollAmount = 0;
		const slideTimer = setInterval(() => {
			element.scrollLeft += step;
			scrollAmount += Math.abs(step);
			if (scrollAmount >= distance) {
				clearInterval(slideTimer);
			}
			if (element.scrollLeft === 0) {
				setArrowDisable(true);
			} else {
				setArrowDisable(false);
			}
		}, speed);
	};

	return (
		<div className="w-full mt-32 sm:mt-0">
			<div className="container w-11/12 sm:w-10/12 xl:w-10/12 mx-auto py-10 flex flex-col gap-10 items-center bg-primary text-white border-8 border-white relative">
				<h2 className="text-3xl lg:text-4xl 2xl:text-[2.5rem] font-secondary">
					Our Best Services
				</h2>
				<div className="w-full flex items-center">
					<button
						className="absolute left-5 p-1 rounded-full"
						onClick={() => {
							handleHorizantalScroll(elementRef.current, 25, 110, -10);
						}}
						disabled={arrowDisable}
					>
						<GoChevronLeft fontSize={24} />
					</button>
					<div
						className="flex gap-5 w-8/12 sm:w-9/12 lg:w-10/12 xl:11/12 mx-auto overflow-hidden"
						ref={elementRef}
					>
						{servicesMenuList.map((item) => (
							<div
								key={`service-menu-item-${item.id}`}
								className="w-32 flex flex-col items-center text-center gap-3 group cursor-pointer"
							>
								<div className="h-24 w-24 bg-white flex justify-center items-center group-hover:border-4 group-hover:border-secondary group-hover:bg-primary">
									<img src={item.image} alt="icon" className="h-14 w-14" />
								</div>
								<p className="group-hover:text-secondary">{item.name}</p>
							</div>
						))}
					</div>
					<button
						className="absolute right-5 p-1 rounded-full"
						onClick={() => {
							handleHorizantalScroll(elementRef.current, 25, 110, 10);
						}}
					>
						<GoChevronRight fontSize={24} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Services;
