import PropTypes from "prop-types";

const Ratings = ({ ratingValue = 0 }) => {
	return (
		<div className="flex">
			{Array(ratingValue)
				.fill("")
				.map((_, i) => (
					<img
						key={`rating-filled-${i}`}
						src="/images/icons/star-icon-filled.svg"
						alt="icon"
					/>
				))}
			{Array(5 - ratingValue)
				.fill("")
				.map((_, i) => (
					<img
						key={`rating-empty-${i}`}
						src="/images/icons/star-icon.svg"
						alt="icon"
					/>
				))}
		</div>
	);
};

Ratings.propTypes = {
	ratingValue: PropTypes.number,
};

export default Ratings;
