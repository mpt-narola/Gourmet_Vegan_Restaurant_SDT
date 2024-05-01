import AboutChef from "./sections/AboutChef";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import SpecialDish from "./sections/SpecialDish";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<AboutChef />
			<Services />
			<SpecialDish />
		</div>
	);
};

export default HomePage;
