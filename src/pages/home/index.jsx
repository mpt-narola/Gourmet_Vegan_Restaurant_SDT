import AboutChef from "./sections/AboutChef";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Services from "./sections/Services";
import SpecialDish from "./sections/SpecialDish";

const HomePage = () => {
	return (
		<div>
			<Hero />
			<AboutChef />
			<Services />
			<SpecialDish />
			<Menu />
		</div>
	);
};

export default HomePage;
