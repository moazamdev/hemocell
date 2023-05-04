const GroupedHeadingComponent = ({
	subheadingText,
	headingText,
	mode = "dark",
	position = "left",
	boxWidth = "small",
}) => {
	return (
		<div
			className={`${boxWidth == "large" ? `w-[800px]` : `w-[650px]`} ${
				position == "center" ? `text-center` : `text-left`
			} heading-content-wrapper mb-5`}
		>
			<span
				className={`
				${position == "center" ? `text-center` : `text-left`}
				${
					mode == "light" ? `text-white` : `text-red`
				} not-italic font-medium text-[20px] leading-normal tracking-[0.2em] uppercase `}
			>
				{subheadingText}
			</span>
			<h2
				className={`
					${position == "center" ? `text-center` : `text-left`}
				${
					mode == "light" ? `text-white` : `text-dark`
				} cta-heading not-italic font-semibold text-[55px] leading-tight capitalize`}
			>
				{headingText}
			</h2>
		</div>
	);
};

export default GroupedHeadingComponent;
