import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ProcessStepComponent from "../process-step/process-step-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const ThreeStepProcessComponent = ( { stepDetails } ) => {
	return (
		<WrapperSection>
			<div className="wrapper">
				<GroupedHeadingComponent
					subheadingText={"Donation Process"}
					headingText={"Step-by-Step Guide to Donating Blood"}
				/>
				<div className="process-steps-wrapper mt-5 sm:mt-10 grid md:grid-cols-[1fr_1fr_1fr]">
					{stepDetails.map((stepDetail) => (
						<ProcessStepComponent {...stepDetail} />
					))}
				</div>
			</div>
		</WrapperSection>
	);
};

export default ThreeStepProcessComponent;
