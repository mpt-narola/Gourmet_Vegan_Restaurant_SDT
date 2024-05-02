import { useEffect, useState } from "react";

import Sidebar from "./Sidebar";
import { appMenuList, userMenuList } from "../utils/constants";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [showSidebar, setShowSidebar] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div className={`bg-secondary h-14 sticky z-30 ${visible ? "-top-1" : ""}`}>
			<div className="w-11/12 max-w-7xl 2xl:max-w-[100rem] mx-auto flex justify-between items-center py-2">
				<div className="flex items-center gap-2">
					<div
						className={`md:hidden content-area ${
							showSidebar ? "open" : "close"
						}`}
					>
						<div
							className="w-fit"
							onClick={() => setShowSidebar((prev) => !prev)}
						>
							<img src="/images/icons/hamburger-icon.svg" alt="menu" />
						</div>
						<Sidebar setShowSidebar={setShowSidebar} />
					</div>
					<img src="/images/logo.svg" alt="logo" />
				</div>
				<div className="hidden md:block">
					<ul className="flex gap-3 xl:gap-8">
						{appMenuList.map((item) => (
							<li
								key={"app-menu-item-" + item.id}
								className={`cursor-pointer hover:opacity-75 ${
									item.isActive ? "border-b-2 border-b-primary" : "opacity-50"
								}`}
							>
								{item.name}
							</li>
						))}
					</ul>
				</div>
				<div>
					<ul className="flex gap-3 lg:gap-5 xl:gap-8">
						{userMenuList.map((item) => (
							<li
								key={"user-menu-item-" + item.id}
								className={
									"xl:opacity-50 cursor-pointer xl:hover:opacity-75 flex items-center gap-2"
								}
							>
								<img src={item.iconPath} alt="icon" />
								<div className="hidden xl:block">
									<span>{item.name}</span>
									{item.count > -1 ? <span>{` (${item.count})`}</span> : null}
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
