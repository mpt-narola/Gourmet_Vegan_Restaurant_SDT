import { BsEnvelope } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import {
	openingHoursList,
	paymentIconList,
	quickLinksList,
} from "../../../utils/constants";
import {
	FaFacebookF,
	FaInstagram,
	FaPinterestP,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

const Footer = () => {
	return (
		<div
			className="min-h-80 lg:min-h-96 xl:min-h-[35rem] flex flex-col text-white"
			style={{
				background: "no-repeat left / cover url('/images/footer-bg.png')",
				// backgroundSize: "100% 100vh",
			}}
		>
			<div className="w-11/12 grow max-w-[88rem] 2xl:max-w-[100rem] mx-auto flex items-center justify-center py-7">
				<div className="flex flex-wrap md:justify-evenly ld:justify-between gap-7 w-full">
					<div className="lg:w-1/4 xl:w-1/6">
						<img src="/images/logo-2.svg" alt="logo" />
						<div className="flex flex-col gap-7 mt-5">
							<p className="flex gap-2">
								<GrLocation fontSize={24} className="text-secondary shrink-0" />
								7/7 lorem. 85A 76530 Baden -Baden Germany
							</p>
							<p className="flex gap-2">
								<IoCallOutline
									fontSize={24}
									className="text-secondary shrink-0"
								/>
								+4 917 670 255 759
							</p>
							<p className="flex gap-2">
								<BsEnvelope fontSize={24} className="text-secondary shrink-0" />
								info@gvrataurant.eu
							</p>
						</div>
					</div>
					<div className="min-w-fit">
						<h4 className="text-xl font-semibold border-b-2 w-fit border-b-secondary">
							Quick Links
						</h4>
						<ul className="mt-7 flex flex-col gap-3">
							{quickLinksList.map((item) => (
								<li key={`quick-link-${item.id}`}>{item.name}</li>
							))}
						</ul>
					</div>
					<div className="min-w-fit">
						<h4 className="text-xl font-semibold border-b-2 w-fit border-b-secondary">
							Opening Hours
						</h4>
						<ul className="mt-7 flex flex-col gap-3">
							{openingHoursList.map((item) => (
								<li
									key={`quick-link-${item.id}`}
									className="flex justify-between gap-8"
								>
									<p>{item.name}</p>
									<p>{item.time}</p>
								</li>
							))}
						</ul>
					</div>
					<div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-col gap-7 md:gap-16 min-w-fit">
						<div>
							<h4 className="text-xl font-semibold border-b-2 w-fit border-b-secondary">
								Follow Us
							</h4>
							<div className="mt-7 flex gap-7 text-xl">
								<FaFacebookF />
								<FaTwitter />
								<FaYoutube />
								<FaInstagram />
								<FaPinterestP />
							</div>
						</div>
						<div>
							<h4 className="text-xl font-semibold border-b-2 w-fit border-b-secondary">
								Payment Options
							</h4>
							<ul className="mt-7 flex gap-3">
								{paymentIconList.map((item) => (
									<li key={`payment-icon-${item.id}`}>
										<img src={item.iconPath} alt="icon" className="h-10" />
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="h-16 sm:h-12 flex items-center justify-center border-t-white border-t-[1px] border-opacity-20">
				<p className="px-2 text-center">
					&copy; 2024{" "}
					<span className="text-secondary underline underline-offset-2">
						Gourmet Vegan Restaurant.
					</span>{" "}
					All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
