const ParaComponent = ({ innerText, size }) => {
	return (
		<p className={`step-description not-italic font-medium ${size == "large" ? `text-[18px]` : `text-[16px]`} leading-7 text-light`}>
			{innerText}
		</p>
	);
};

export default ParaComponent;
