export const appMenuList = [
	{ id: 1, name: "Home", isActive: true },
	{ id: 2, name: "About Us" },
	{ id: 3, name: "Restaurant" },
	{ id: 4, name: "Blog" },
	{ id: 5, name: "Contact Us" },
];

export const userMenuList = [
	{
		id: 1,
		name: "Wishlist",
		count: 0,
		iconPath: "/images/icons/wishlist-icon.png",
	},
	{ id: 2, name: "My Cart", count: 1, iconPath: "/images/icons/cart-icon.png" },
	{ id: 3, name: "My Account", iconPath: "/images/icons/user-icon.png" },
];

export const servicesMenuList = [
	{ id: 1, name: "Buffet", image: "/images/services/buffet.svg" },
	{ id: 2, name: "Catering", image: "/images/services/catering.svg" },
	{ id: 3, name: "Deliver Service", image: "/images/services/delivery.svg" },
	{ id: 4, name: "Outdoor Area", image: "/images/services/outdoor.svg" },
	{ id: 5, name: "Parking Spaces", image: "/images/services/parking.svg" },
	{ id: 6, name: "Free Wifi", image: "/images/services/wifi.svg" },
	{ id: 7, name: "Barrier-free", image: "/images/services/barrier-free.svg" },
	{
		id: 8,
		name: "Private Events",
		image: "/images/services/private-events.svg",
	},
	{ id: 9, name: "Takeaway Food", image: "/images/services/takeaway.svg" },
];

export const specialDishList = [
	{
		id: 1,
		image: "/images/food-plate.png",
		name: "Mexican tacos with beef in tomato sauce and salsa.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		price: "$29.99",
		ratings: 3,
		isFavorite: false,
	},
	{
		id: 2,
		image: "/images/food-plate.png",
		name: "French fries with beef and sauce.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		price: "$19.50",
		ratings: 5,
		isFavorite: true,
	},
	{
		id: 3,
		image: "/images/food-plate.png",
		name: "Mexican tacos with beef in tomato sauce and salsa.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		price: "$29.99",
		ratings: 4,
		isFavorite: false,
	},
	{
		id: 4,
		image: "/images/food-plate.png",
		name: "French fries with beef and salsa.",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		price: "$21.00",
		ratings: 5,
		isFavorite: false,
	},
];
