import Facebook from "@/public/icons/facebook.svg";
import Twitter from "@/public/icons/twitter.svg";
import Instagram from "@/public/icons/instagram.svg";
import Linkedin from "@/public/icons/linkedin.svg";
import Location from "@/public/icons/location.svg";
import Email from "@/public/icons/email.svg";
import Phone from "@/public/icons/phone.svg";

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
	heading1: "Bea You",
	heading2: ".",
	navLinks: [
		{
			id: 1,
			title: "Home",
			url: "/",
		},
		{
			id: 2,
			title: "Shop",
			url: "/products",
		},
		{
			id: 3,
			title: "About us",
			url: "/about-us",
		},
		{
			id: 4,
			title: "Contact us",
			url: "/contact-us",
		},
	],
};

//-------------------------------HOME PAGE ------------------------------//
export const homePageBanner = {
	backgroundBannerImage: "/images/bannerImage.png",
	heading: "The epitome of beautiful skin.",
	description:
		"Discover the beauty within with Beayou , be Beautiful You.It means you can wear the less makeup and let skin SHINE through.",
	actionBtn1: "Shop Now",
	actionBtn2: "Explore",
};

export const topProduct = {
	heading: "It's a SKIN-VESTMENT",
	description: `At 'Bea You,' our mission transcends conventional beauty standards.Our goal is to foster a community where every skin journey is celebrated, recognizing that beauty is diverse and personal.
    'Bea You' is not just a skincare brand; it's a commitment to authenticity, self-love, and the belief that everyone deserves to feel confident in their unique skin.`,
	actionBtn: "Explore",
};

export const whyChooseUs = {
	image: "/images/whyChooseUsImg.jpg",
	heading: "We take skincare seriously",
	description: `As said "Glowing skin is always in".So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface.
    We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.`,
	services: [
		{
			id: 1,
			icon: "/icons/shippingtruck.svg",
			heading: "Fast & Free Shipping",
			serviceDescription:
				"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
		},
		{
			id: 2,
			icon: "/icons/bag.svg",
			heading: "Ready, Set, Glow (Easy to shop)",
			serviceDescription:
				"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
		},
		{
			id: 3,
			icon: "/icons/support.svg",
			heading: "24/7 support",
			serviceDescription:
				"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
		},
		{
			id: 4,
			icon: "/icons/return.svg",
			heading: "Hassle free return",
			serviceDescription:
				"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
		},
	],
};

// export const help = {
//   image1: "",
//   image2: "",
//   image3: "",
//   heading: "We Help You Make Modern Interior Design",
//   description:
//     "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada",
//   icon: "",
//   points: [
//     {
//       id: 1,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 2,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 3,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//     {
//       id: 4,

//       pointDescription: "Donec vitae odio quis nisl dapibus malesuada",
//     },
//   ],
//   actionBtn1: "",
// };

export const testimonialData = {
	heading: "Testimonials",
	testimonialCards: [
		{
			id: 1,
			description:
				'"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
			image: "/images/person-1.png",
			name: "Maria Jones",
			designation: "CEO, Co-Founder, XYZ Inc.",
		},
		{
			id: 2,
			description:
				'"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
			image: "/images/person-1.png",
			name: "Maria Jones",
			designation: "CEO, Co-Founder, XYZ Inc.",
		},
		{
			id: 3,
			description:
				'"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque."',
			image: "/images/person-1.png",
			name: "Maria Jones",
			designation: "CEO, Co-Founder, XYZ Inc.",
		},
	],
};

//-------------------------------FOOTER-------------------------------//

export const footerData = {
	footerImage: "/images/footerImage.png",
	newsLetter: {
		heading: "Subscribe to Newsletter",
	},
	heading: "Furni.",
	description:
		"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant",
	socialMedia: [
		{
			id: 1,
			name: "facebook",
			icon: Facebook,
		},
		{
			id: 2,
			name: "Twitter",
			icon: Twitter,
		},
		{
			id: 3,
			name: "Instagram",
			icon: Instagram,
		},
		{
			id: 4,
			name: "Linkedin",
			icon: Linkedin,
		},
	],
	footerLinks: [
		[
			{
				id: 1,
				title: "About us",
				url: "/",
			},
			{
				id: 2,
				title: "Service",
				url: "/",
			},

			{
				id: 3,
				title: "Contact us",
				url: "/",
			},
		],
		[
			{
				id: 1,
				title: "Support",
				url: "/",
			},
			{
				id: 2,
				title: "Knowledge base",
				url: "/",
			},
		],
		[
			{
				id: 1,
				title: "Jobs",
				url: "/",
			},
			{
				id: 2,
				title: "Our team",
				url: "/",
			},
			{
				id: 3,
				title: "Leadership",
				url: "/",
			},
			{
				id: 4,
				title: "Privacy Policy",
				url: "/",
			},
		],
		[
			{
				id: 1,
				title: "Nordic Chair",
				url: "/",
			},
			{
				id: 2,
				title: "Kruzo Aero",
				url: "/",
			},
			{
				id: 3,
				title: "Ergonomic Chair",
				url: "/",
			},
		],
	],
	copyright: {
		description: "Copyright ©2023. All Rights Reserved.",
		links: [
			{
				id: 1,
				title: "Terms & Conditions",
				url: "/terms-and-conditions",
			},
			{
				id: 2,
				title: "Privacy Policy",
				url: "/privacy-policy",
			},
		],
	},
};

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
	backgroundBannerImage: "",
	heading: "Shop",
};

export const products = [
	{
		id: 1,
		handle: "product-1",
		productThumbnail: {
			id: 0,
			url: "/images/product1.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product2.png",
			},
			{
				id: 2,
				url: "/images/product3.png",
			},
			{
				id: 3,
				url: "/images/product1.png",
			},
		],
		productName: "Cleanser",
		price: {
			productDiscountPrice: "₹399/-",
			productOriginalPrice: "₹499/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.`,
		howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
		productDescription: `**Feel Refresh | BE Nourished| Be Beautiful | Bea You**

Get cleansed, soft & hydrated skin in just 40 seconds* with Bea You Face Cleanser. It gently yet effectively cleanses skin to remove dirt, oil and other impurities without making skin dry. Adding it in your routine will minimize the effects of environmental stressors on the skin, leaving you with cleanand soft skin. 
		
Defend against 5 sign of Skin sensitivity: Weakened free, Dryness, Roughness, Irritaton, roughness, Tightness 
		
Paraben Sulphate free 
Cruelty free 
Make in india 
		
**Key point:** Hydrating Glycerin, Vitamin B3 & B5, Non foaming formula vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin. Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin`,
		additionalInfo: `**Image and actual product may very**
		
		**STORAGE:** Store in a cool place. Keep away from direct sun light. WARNING: Do not refrigerate. Replace the cap tightly after use.`,
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 2,
		handle: "product-2",
		productThumbnail: {
			id: 0,
			url: "/images/product2.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product2.png",
			},
			{
				id: 2,
				url: "/images/product2.png",
			},
			{
				id: 3,
				url: "/images/product2.png",
			},
		],
		productName: "Gluta Radiance",
		price: {
			productDiscountPrice: "₹399/-",
			productOriginalPrice: "₹499/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: `Cucumber Extract, Lemon Extract, Rosemary Extract, Glycolic Acid, Lactic Acid, Sodium Hyaluronate, Niacinamide, L- Argenine, Licorice Extract, Alpha Arbutin, Berberis Extract, Propylene Glycol.
    Pluethylene Glycol 400, Glycerin, Edta, Fragrance, Triethanol Amine, Phenoxyethanol, Ethylhexylglycerin & Aqua 
    DIRECTION FOR USE: Put a pea size amount of Fair-Wish Under Eye Gel on the Tip of your ring finger & apply small dots under the eye & message gently. Be Careful & make sure you are not getting close to your eyelash line.
    `,
		howToUse: `Apply cleanser and gently massage into skin barrier.
    Wash with normal water.`,
		productDescription: `**Power Glutathione | Reduce hyperpigmentation | Pore minimizer | Deep Hydration |Be Beautiful | Bea You**

Unleash your inner radiance with Bea You Gluta Radiance moisturiser. Get this moisturiser to forms a protective barrier, sealing in the natural moisture produced by your skin. The powerhouse of Niacinamide, Hyaluronic acid, Glutathione & vitamin A,C, E. That work together to smooth out rough patches, resulting in a velvety soft complexion and dewy appearance.  
	
Defend against 5 sign of Skin sensitivity: Weakened free, Dryness, Roughness, Irritaton, roughness, Tightness  
	
Paraben Sulphate free  
Cruelty free  
Make in india  
			
*Key point:* Glutathione 2%, Alpha Arbutin 0.2%, Niacinamide 0.2%, Hyaluronic Acid 0.2%, Kojic Acid 1%, with Vitamin A, C, E  
vitamin b3: prevent water loss and retain skin's moisture content. It's also known to increase keratin.  
Vitamin b5 : it helps to boost the production of glutathione in our skin. it has anti-inflammatory properties that soothe irritated and dry skin`,
		reviewCount: 55,
		rating: 3,
		additionalInfo: `**Image and actual product may very**
**STORAGE:** Store in a cool place. Keep away from direct sun light. WARNING: Do not refrigerate. Replace the cap tightly after use.`,
	},
	{
		id: 3,
		handle: "product-3",
		productThumbnail: {
			id: 0,
			url: "/images/product3.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product3.png",
			},
			{
				id: 2,
				url: "/images/product3.png",
			},
			{
				id: 3,
				url: "/images/product3.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹599/-",
			productOriginalPrice: "₹799/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 4,
		handle: "product-4",
		productThumbnail: {
			id: 0,
			url: "/images/product1.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product1.png",
			},
			{
				id: 2,
				url: "/images/product1.png",
			},
			{
				id: 3,
				url: "/images/product1.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹899/-",
			productOriginalPrice: "₹1099/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 5,
		handle: "product-5",
		productThumbnail: {
			id: 0,
			url: "/images/product2.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product2.png",
			},
			{
				id: 2,
				url: "/images/product2.png",
			},
			{
				id: 3,
				url: "/images/product2.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹399/-",
			productOriginalPrice: "₹699/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 6,
		handle: "product-6",
		productThumbnail: {
			id: 0,
			url: "/images/product3.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product3.png",
			},
			{
				id: 2,
				url: "/images/product3.png",
			},
			{
				id: 3,
				url: "/images/product3.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹199/-",
			productOriginalPrice: "₹399/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 7,
		handle: "product-7",
		productThumbnail: {
			id: 0,
			url: "/images/product1.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product1.png",
			},
			{
				id: 2,
				url: "/images/product1.png",
			},
			{
				id: 3,
				url: "/images/product1.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹99/-",
			productOriginalPrice: "₹199/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 8,
		handle: "product-8",
		productThumbnail: {
			id: 0,
			url: "/images/product2.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product2.png",
			},
			{
				id: 2,
				url: "/images/product2.png",
			},
			{
				id: 3,
				url: "/images/product2.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹699/-",
			productOriginalPrice: "₹999/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
	{
		id: 9,
		handle: "product-9",
		productThumbnail: {
			id: 0,
			url: "/images/product3.png",
		},
		productImages: [
			{
				id: 1,
				url: "/images/product3.png",
			},
			{
				id: 2,
				url: "/images/product3.png",
			},
			{
				id: 3,
				url: "/images/product3.png",
			},
		],
		productName: "Ergonomic Chair",
		price: {
			productDiscountPrice: "₹699/-",
			productOriginalPrice: "₹899/-",
		},
		weight: "125 Ml",
		category: "Skin-Face",
		ingredients: "",
		howToUse: "",
		productDescription:
			"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
		reviewCount: 55,
		rating: 3,
	},
];

export const productReviews = [
	{
		id: 1,
		name: "Tomas Doe",
		image: "/images/person-1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
		rating: 4,
	},
	{
		id: 2,
		name: "Tomas Doe",
		image: "/images/person-1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
		rating: 5,
	},
	{
		id: 3,
		name: "Tomas Doe",
		image: "/images/person-1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
		rating: 4,
	},
	{
		id: 4,
		name: "Tomas Doe",
		image: "/images/person-1.png",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra amet, sodales faucibus nibh. Vivamus amet potenti ultricies nunc gravida duis. Nascetur scelerisque massa sodales.",
		rating: 3,
	},
];
//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsPageBanner = {
	backgroundBannerImage: "/images/bannerImage.png",
	heading: "About Us",
	description:
		"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
	actionBtn1: "Shop Now",
	actionBtn2: "Explore",
};

// export const ourTeamData = {
//   title: "Our Team",
//   teamMember: [
//     {
//       id: 1,
//       image: "",
//       name: "Lawson Arnold",
//       designation: "CEO, Founder, Atty.",
//       description:
//         " in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 2,
//       image: "",
//       name: "Jeremy Walker",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 3,
//       image: "",
//       name: "Patrik White",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//     {
//       id: 4,
//       image: "",
//       name: "Kathryn Ryan",
//       designation: "CEO, Founder, Atty.",
//       description:
//         "in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//       btnText: "Learn More",
//     },
//   ],
// };

//----------------------------SERVICES------------------------//

export const servicePageBanner = {
	backgroundBannerImage: "",
	heading: "About Us",
	description:
		"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
	actionBtn1: "Shop Now",
	actionBtn2: "Explore",
};

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
	backgroundBannerImage: "/images/bannerImage.png",
	heading: "Contact Us",
	description:
		"Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.",
	actionBtn1: "Shop Now",
	actionBtn2: "Explore",
};

export const contactDetails = [
	{
		id: 1,
		name: "Address",
		icon: Location,
		description: "43 Raymouth Rd. Baltemoer, London 3910",
	},
	{
		id: 2,
		name: "Email",
		icon: Email,
		description: "info@yourdomain.com",
	},
	{
		id: 3,
		name: "Phone-number",
		icon: Phone,
		description: "+1 294 3925 3939",
	},
];

// export const contactForm = {
//   name1: "First name",
//   name1: "Last name",
//   email: "Email Address",
//   message: "Message",
// };

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
	backgroundBannerImage: "",
	heading: "Cart",
};

export const cartPage = {
	cartHeaderList: [
		{
			id: 1,
			name: "Image",
		},
		{
			id: 2,
			name: "Product",
		},
		{
			id: 3,
			name: "Price",
		},
		{
			id: 4,
			name: "Quantity",
		},
		{
			id: 5,
			name: "Total",
		},
		{
			id: 6,
			name: "Remove",
		},
	],
	cartProductList: [
		{
			id: 1,
			productImage: "/images/product1.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
		{
			id: 2,
			productImage: "/images/product2.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
		{
			id: 3,
			productImage: "/images/product3.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
		{
			id: 4,
			productImage: "/images/product1.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
		{
			id: 5,
			productImage: "/images/product2.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
		{
			id: 6,
			productImage: "/images/product3.png",
			productName: "Chair",
			productPrice: "₹50.00",
		},
	],
	cartActionBtn1: "Update Cart",
	cartActionBtn2: "Continue shopping",
};

export const coupon = {
	heading: "Coupon",
	description: "Lorem a src jkuyyhur",
	CouponActionBtn: "Apply Code",
};

export const cartTotal = {
	heading: "Cart Totals ",
	subtotal: "Subtotal",
	total: "Total",
	checkoutActionBtn: "Proceed To Checkout",
};
//-----------------------------CHECKOUT FORM--------------------------//
