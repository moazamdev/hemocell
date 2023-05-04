import HeaderComponent from "../../sections/header/header-component";
import HeroComponent from "../../sections/hero/hero-component";
import TwoCtaComponent from "../../sections/two-cta/two-cta-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import CriteriaComponent from "../../sections/criteria/criteria-component";
import BeforeFooterCTA from "../../sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "../../sections/footer/footer-component";

const HomePage = () => {
	const HomePageDetails = [
		{
			subheadingText: "Save Lives Today",
			headingText: "Donate Blood with HemoCell",
			classHint: "donate-blood-with-hemocell",
			paraText:
				"Our mission is to create a community of donors who make a difference in the lives of others. We prioritize the safety and comfort of our donors and patients, and provide the highest quality of care to ensure an easy and convenient donation process. Join us in our life-saving mission.",
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		{
			classHint: "quote",
			quoteText: `“The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you.”`,
		},
		{
			subheadingText: "Donate blood today",
			headingText: "Why should you donate blood?",
			classHint: "why-donate-blood",
			paraText: `Donating blood is a selfless act that has the power to save lives. Here are a few reasons why you should consider donating blood:
			\n― You could help save up to three lives with just one donation.
			― Blood is always needed in emergency situations, such as natural disasters and accidents.
			― Blood is needed for patients undergoing surgeries, cancer treatment, and other medical procedures.
			― Blood cannot be manufactured, which means that the only source of blood is through donations from volunteers.
			― Donating blood can also have health benefits for the donor, such as reducing the risk of heart disease and cancer.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: true,
		},
		{
			subheadingText: "Are you ready?",
			headingText: "Eligibility Criteria",
			classHint: "eligibility-criteria",
			paraText: [
				`18-50 years, above 50 Kg.`,
				`Normal temperature, pulse and blood pressure.`,
				`No Respiratory Diseases`,
				`Above 12.5 g/dL Hemoglobin`,
				`No skin disease, puncture or scars`,
				`No history of transmissible disease`,
			],
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Donate Now",
			buttonLink: "/donate-blood",
			buttonHave: false,
		},
	];

	return (
		<>
			<HeaderComponent />
			<HeroComponent />
			<TwoCtaComponent />
			<ThreeStepProcessComponent />
			<SideBySideComponent {...HomePageDetails[0]} />
			<QuoteComponent {...HomePageDetails[1]} />
			<SideBySideComponent {...HomePageDetails[2]} />
			<CriteriaComponent {...HomePageDetails[3]} />
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
};

export default HomePage;
