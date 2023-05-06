import "./quote-component-styles.scss";

import WrapperSection from "../wrapper-section/wrapper-section-component";
import ButtonComponent from "../button/button-component";

const QuoteComponent = ({
	quoteText,
	classHint,
	buttonHave,
	buttonText,
	buttonLink,
}) => {
	return (
		<WrapperSection>
			<div
				className={`quote-wrapper relative p-6 sm:p-10 md:p-12 lg:p-20 grid place-items-center w-full rounded-rmd ${classHint}`}
			>
				<blockquote className="w-full md:w-[100%] lg:w-[80%] font-serif italic font-normal text-[20px] sm:text-[25px] md:text-[35px] sm:leading-normal md:leading-[45px] sm:text-center text-white">
					{quoteText}
				</blockquote>
				{buttonHave && (
					<ButtonComponent
						buttonText={buttonText}
						buttonLink={buttonLink}
						buttonType={"line"}
					/>
				)}
			</div>
		</WrapperSection>
	);
};

export default QuoteComponent;
