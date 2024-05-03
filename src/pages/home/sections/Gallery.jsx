import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";

import { galleryList } from "../../../utils/constants";
import Draggable from "../../../components/Draggable";

const Gallery = () => {
	const galleryRef = useRef(null);

	return (
		<div className="min-h-screen h-max py-10">
			<div className="min-h-[calc(100vh-56px)] w-screen mx-auto flex flex-col items-center justify-evenly">
				<h2 className="text-3xl lg:text-4xl 2xl:text-[2.5rem] font-secondary text-primary">
					Gallery
				</h2>
				<Draggable rootClass={"drag"}>
					<div
						className="flex flex-row gap-6 px-8 overflow-x-auto w-full"
						ref={galleryRef}
					>
						{galleryList.map((item) => (
							<div
								key={`gallery-item-${item.id}`}
								className="h-[27rem] w-fit  shrink-0 group relative bg-black"
							>
								{/* <div className="h-96"></div> */}
								<img
									src={item.imagePath}
									alt="image"
									className="w-full h-full group-hover:opacity-20 group-hover:blur-sm"
								/>
								{/* Hidden content */}
								<div className="transition-all absolute top-0 h-full w-full transform ease-in duration-300 opacity-0 group-hover:opacity-100 p-10">
									<div className="border-2 border-secondary h-full w-full flex justify-center items-center">
										<div className="flex flex-col gap-3 justify-center items-center">
											<FaInstagram className="text-white" fontSize={28} />
											<p className="text-white text-sm">@GV_Restaurant</p>
										</div>
									</div>
								</div>
								{/* End of hidden content */}
							</div>
						))}
					</div>
				</Draggable>
				<button className="primary">Load More</button>
			</div>
		</div>
	);
};

export default Gallery;
