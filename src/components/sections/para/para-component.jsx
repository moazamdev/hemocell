const ParaComponent = ({ innerText }) => {
	return (
		<p className="step-description not-italic font-medium text-[16px] leading-7 text-light">
			{innerText}
		</p>
	);
};

export default ParaComponent;
