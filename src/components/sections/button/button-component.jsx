import { NavLink } from "react-router-dom";

const ButtonComponent = ({ buttonText, buttonLink, buttonType }) => {
	return (
		<button
			className={`cta-btn 
            mt-5 rounded-rsm border 
            ${
				buttonType === "fill"
					? "border-dark_red text-white bg-dark_red hover:bg-dark hover:text-white"
					: "border-off_white/[.5] text-dark bg-white hover:bg-red hover:text-white hover:border-red"
			}
            transition text-black px-8 py-3 text-sm w-fit font-bold`}
		>
			<NavLink to={buttonLink}>{buttonText}</NavLink>
		</button>
	);
};

export default ButtonComponent;
