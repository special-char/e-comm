export type DesktopNavType = {
	data: {
		heading1: string;
		heading2: string;
		navLinks: Array<{
			id: number;
			title: string;
			url: string;
		}>;
	};
};

export type MobileNavType = {
	data: {
		heading1: string;
		heading2: string;
		navLinks: Array<{
			id: number;
			title: string;
			url: string;
		}>;
	};
};

export type BannerPropsType = {
	data: {
		backgroundBannerImage: string;
		heading: string;
		description: string;
		actionBtn1: string;
		actionBtn2: string;
	};
	data: {
		backgroundBannerImage?: string;
		heading: string;
		description?: string;
		actionBtn1?: string;
		actionBtn2?: string;
	};
};

export type testimonialCardType = {
	data: {
		id: number;
		description: string;
		image: string;
		name: string;
		designation: string;
	};
};

export type ProductCardType = {
	data: {
		id: number;
		handle: string;
		productThumbnail: {
			id: number;
			url: string;
		};
		productImages: Array<{
			id: number;
			url: string;
		}>;
		productName: string;
		price: {
			productDiscountPrice: string;
			productOriginalPrice: string;
		};
		productDescription: string;
		rating: number;
		reviewCount: number;
		weight: string;
		category: string;
		ingredients: string;
		howToUse: string;
		additionalInformation?: string;
	};
};
export type ServiceCardType = {
	data: {
		id: number;
		icon: string;
		heading: string;
		serviceDescription: string;
	};
};
export type ContactDetailType = {
	data: {
		id: number;
		icon: any;
		description: string;
	};
};
