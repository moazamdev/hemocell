import ParaComponent from "../para/para-component";

const ProcessStepComponent = ({
	key,
	stepNumber,
	stepName,
	stepDescription,
	stepUrl,
}) => {
	return (
		<a href={stepUrl} className="process-step p-3 pr-10" key={key}>
			<div className="step-number-wrapper w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-dark_red rounded-full flex justify-center items-center mb-2 mt-5 sm:mb-5">
				<span className="step-number not-italic font-bold text-[16px] sm:text-[20px] leading-[34px] capitalize text-off_white">
					{stepNumber}
				</span>
			</div>
			<div className="step-content-wrapper">
				<h3 className="step-name not-italic font-bold text-[25px] leading-[41px] capitalize text-dark">
					{stepName}
				</h3>
				<ParaComponent innerText={stepDescription} />
			</div>
		</a>
	);
};

export default ProcessStepComponent;
