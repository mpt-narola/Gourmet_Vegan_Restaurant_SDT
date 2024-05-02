import AboutChef from "./sections/AboutChef";
import Footer from "./sections/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";
import Menu from "./sections/Menu";
import Newsletter from "./sections/Newsletter";
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
			<Gallery />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default HomePage;
