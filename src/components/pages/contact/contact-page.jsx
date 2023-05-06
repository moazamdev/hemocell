import HeroComponent from "../../sections/hero/hero-component";

const ContactPage = () => {
	const ContactPageDetails = {
		hero: {
			subheadingText: "Got any Questions?",
			headingText: "Don't Know What to Do? Let Us Assist You.",
			classHint: "contact-page-hero",
		},
	};

	// const stepDetails = [
	// 	{
	// 		key: "promote-widely",
	// 		stepNumber: "01",
	// 		stepName: "Promote Widely",
	// 		stepDescription:
	// 			"Use social media, flyers, and emails to spread the word.",
	// 	},
	// 	{
	// 		key: "emphasize-benefits",
	// 		stepNumber: "02",
	// 		stepName: "Emphasize Benefits",
	// 		stepDescription: "Highlight the positive impact donors can make.",
	// 	},
	// 	{
	// 		key: "varity-of-channels",
	// 		stepNumber: "03",
	// 		stepName: "Variety of Channels",
	// 		stepDescription:
	// 			"Use multiple marketing channels to reach potential donors.",
	// 	},
	// ];

	return (
		<>
			<HeroComponent {...ContactPageDetails.hero} />

		</>
	);
};

export default ContactPage;
