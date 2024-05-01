import PropTypes from "prop-types";
import Navbar from "./Navbar";
import "./baseLayout.css";

const BaseLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
};

BaseLayout.propTypes = {
	children: PropTypes.any,
};

export default BaseLayout;
