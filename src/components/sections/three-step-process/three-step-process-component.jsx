import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ProcessStepComponent from "../process-step/process-step-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const ThreeStepProcessComponent = () => {
	const stepDetails = [
		{
			key: "check-eligibility",
			stepNumber: "01",
			stepName: "Check your eligibility",
			stepDescription:
				"Confirm you meet the eligibility requirements to donate blood, such as age, weight, and overall health.",
		},
		{
			key: "schedule-an-appointment",
			stepNumber: "02",
			stepName: "Schedule an appointment",
			stepDescription:
				"Schedule an appointment at a blood bank or blood drive near you.",
		},
		{
			key: "donate-blood",
			stepNumber: "03",
			stepName: "Donate Blood",
			stepDescription:
				"Arrive at the appointment, fill out a questionnaire, and donate blood. The process takes about 10-15 minutes.",
		},
	];

	return (
		<WrapperSection>
			<div className="wrapper">
				<GroupedHeadingComponent
					subheadingText={"Donation Process"}
					headingText={"Step-by-Step Guide to Donating Blood"}
				/>
				<div className="process-steps-wrapper mt-5 sm:mt-10 grid sm:grid-cols-[1fr_1fr_1fr]">
					{stepDetails.map((stepDetail) => (
						<ProcessStepComponent {...stepDetail} />
					))}
				</div>
			</div>
		</WrapperSection>
	);
};

export default ThreeStepProcessComponent;
