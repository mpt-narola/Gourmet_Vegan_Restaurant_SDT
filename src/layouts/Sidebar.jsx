import PropTypes from "prop-types";
import { appMenuList } from "../utils/constants";

const Sidebar = ({ setShowSidebar = () => {} }) => {
	return (
		<div
			className={`sidebar bg-primary text-secondary md:hidden fixed w-48 h-screen top-0 left-0 z-10 flex-col p-2`}
		>
			<div className="flex justify-between items-center">
				<div className="bg-secondary p-1 w-fit">
					<img src="/images/logo.svg" alt="logo" />
				</div>
				<div onClick={() => setShowSidebar(false)}>
					<img src="/images/icons/close-icon.svg" alt="close" />
				</div>
			</div>
			<ul className="flex flex-col gap-3 items-center my-10">
				{appMenuList.map((item) => (
					<li key={"app-menu-item-" + item.id} className={`px-2`}>
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

Sidebar.propTypes = {
	setShowSidebar: PropTypes.func,
};

export default Sidebar;
