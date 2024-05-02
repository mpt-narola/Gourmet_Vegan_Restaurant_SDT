import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

const Ratings = ({ ratingValue = 0 }) => {
	return (
		<div className="flex items-center text-secondary">
			{Array(ratingValue)
				.fill("")
				.map((_, i) => (
					<FaStar key={`rating-filled-${i}`} fontSize={24} />
				))}
			{Array(5 - ratingValue)
				.fill("")
				.map((_, i) => (
					<FaRegStar key={`rating-empty-${i}`} fontSize={24} />
				))}
		</div>
	);
};

Ratings.propTypes = {
	ratingValue: PropTypes.number,
};

export default Ratings;
