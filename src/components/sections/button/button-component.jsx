const ButtonComponent = ({
	buttonText,
	buttonLink,
	buttonType,
}) => {
	return (
		<button
			className={`cta-btn 
            mt-5 rounded-rsm border 
            ${
				buttonType === "fill"
					? "border-dark_red text-white bg-dark_red hover:bg-dark hover:text-white"
					: "border-off_white/[.5] text-white hover:bg-white hover:text-dark"
			}
            transition text-black px-8 py-3 text-sm w-fit font-medium`}
		>
			<a href={buttonLink}>{buttonText}</a>
		</button>
	);
};

export default ButtonComponent;
