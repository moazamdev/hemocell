import { useState } from "react";
import HeroComponent from "../../sections/hero/hero-component";
import FormComponent from "../../sections/form/form-component";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		blood_type: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formData);

		setFormData({
			name: "",
			email: "",
			phone: "",
			blood_type: "",
			message: "",
		});
	};

	const ContactPageDetails = {
		hero: {
			subheadingText: "Got any Questions?",
			headingText: "Don't Know What to Do? Let Us Assist You.",
			classHint: "contact-page-hero",
		},
	};

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
			key: "reason",
			name: "reason",
			type: "text",
			placeholder: "Reason",
			required: false,
		},
	];

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
			<FormComponent
				fields={fields}
				heading={"We’re to help"}
				buttonText={"Send Message"}
				handleSubmit={handleSubmit}
				formData={formData}
				setFormData={setFormData}
			/>
		</>
	);
};

export default ContactPage;
