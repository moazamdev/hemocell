import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import ThreeStepProcessComponent from "../../sections/three-step-process/three-step-process-component";
import SideBySideComponent from "../../sections/side-by-side/side-by-side-component";
import QuoteComponent from "../../sections/quote/quote-component";
import FormComponent from "../../sections/form/form-component";

const HostBloodDrivePage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		institute: "",
		designation: "",
		city: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		setFormData({
			name: "",
			email: "",
			phone: "",
			institute: "",
			designation: "",
			city: "",
			message: "",
		});
	};

	const HostBloodDrivePageDetails = {
		quote: {
			classHint: "quote host-drive-quote",
			quoteText: `“Your decision to host a blood drive with us can be the reason someone smiles today, tomorrow, and for many years to come. Let's make a difference together!”`,
		},
		benefits_host_drive: {
			subheadingText: "Being a Hero",
			headingText: "Benefits of Hosting a Blood Drive",
			classHint: "side-col-image benefits-host-drive",
			paraText: `Hosting a blood drive is a great way to give back to your community and help save lives.
			By providing a convenient location for people to donate, you can help ensure that there is a steady supply of blood for those in need.
			Blood drives also provide an opportunity for team building and community involvement, and can boost morale and engagement among employees or group members.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Host Now",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},

		hosting_blood_drive: {
			subheadingText: "",
			headingText: "Hosting the Blood Drive",
			classHint: "side-col-image hosting-blood-drive",
			paraText: `On the day of the blood drive, it's important to ensure that everything runs smoothly and that donors have a positive experience.
			Make sure you have enough volunteers to help with registration, refreshments, and donor follow-up.
			Provide a comfortable and welcoming environment for donors, and ensure that all equipment is properly sanitized and maintained.`,
			imageUrl: "../../../assets/images/blood-donation(1).jpg",
			buttonText: "Host Now",
			buttonLink: "/host-blood-drive",
			buttonHave: true,
		},

		hero: {
			subheadingText: "Join us to save lives",
			headingText: "Host a Blood Drive to save lives with us",
			classHint: "host-blood-drive-page-hero",
		},
		stepsText: {
			subheadingText: "Guide for Hosting",
			headingText: "Promoting Your Blood Drive",
		},
	};

	const stepDetails = [
		{
			key: "promote-widely",
			stepNumber: "01",
			stepName: "Promote Widely",
			stepDescription:
				"Use social media, flyers, and emails to spread the word.",
		},
		{
			key: "emphasize-benefits",
			stepNumber: "02",
			stepName: "Emphasize Benefits",
			stepDescription: "Highlight the positive impact donors can make.",
		},
		{
			key: "varity-of-channels",
			stepNumber: "03",
			stepName: "Variety of Channels",
			stepDescription:
				"Use multiple marketing channels to reach potential donors.",
		},
	];

	const fields = [
		{
			key: "name",
			name: "name",
			type: "text",
			placeholder: "Name",
			required: true,
		},
		{
			key: "email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
		},
		{
			key: "phone",
			name: "phone",
			type: "tel",
			placeholder: "Phone",
			required: true,
		},
		{
			key: "institute",
			name: "institute",
			type: "text",
			placeholder: "Institute",
			required: true,
		},
		{
			key: "designation",
			name: "designation",
			type: "text",
			placeholder: "Designation",
			required: false,
		},
		{
			key: "city",
			name: "city",
			type: "text",
			placeholder: "City",
			required: true,
		},
	];

	return (
		<>
			<HeroComponent {...HostBloodDrivePageDetails.hero} />
			<FormComponent
				fields={fields}
				heading={"Host a Blood Drive"}
				buttonText={"Schedule Host"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
			<ThreeStepProcessComponent
				stepsText={HostBloodDrivePageDetails.stepsText}
				stepDetails={stepDetails}
			/>
			<SideBySideComponent
				{...HostBloodDrivePageDetails.benefits_host_drive}
			/>
			<QuoteComponent {...HostBloodDrivePageDetails.quote} />
			<SideBySideComponent
				{...HostBloodDrivePageDetails.hosting_blood_drive}
			/>
		</>
	);
};

export default HostBloodDrivePage;
