import ParaComponent from "../para/para-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const ContactDetailsComponent = ({ contactDetails }) => {
	return (
		<WrapperSection>
			<div className="wrapper bg-off_white w-full py-10 px-2 sm:px-20 md:px-6 rounded-rmd">
				<div className="process-steps-wrapper place-items-start md:place-items-center grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr]">
					{contactDetails.map(
						({
							key,
							stepNumber,
							stepName,
							stepDescription,
							stepUrl,
						}) => (
							<a
								href={stepUrl}
								className="process-step w-full p-3 grid grid-cols-4 gap-5"
								key={key}
							>
								<div className="step-number-wrapper w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] bg-dark_red rounded-full flex justify-center items-center mb-2 m:mb-5">
									<span className="step-number not-italic font-bold text-[16px] sm:text-[20px] leading-[34px] capitalize text-off_white">
										{stepNumber}
									</span>
								</div>
								<div className="step-content-wrapper col-span-3">
									<h3 className="step-name not-italic font-bold text-[25px] leading-[41px] capitalize text-dark">
										{stepName}
									</h3>
									<ParaComponent
										innerText={stepDescription}
										size={"large"}
									/>
								</div>
							</a>
						)
					)}
				</div>
			</div>
		</WrapperSection>
	);
};

export default ContactDetailsComponent;
