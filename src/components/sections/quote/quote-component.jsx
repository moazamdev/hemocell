import "./quote-component-styles.scss";

import WrapperSection from "../wrapper-section/wrapper-section-component";

const QuoteComponent = ({ quoteText, classHint }) => {
	return (
		<WrapperSection>
			<div
				className={`quote-wrapper grid place-items-center w-full rounded-rmd ${classHint}`}
			>
				<blockquote className="text-center w-[800px] font-serif italic font-normal text-[35px] leading-[45px] text-center text-white">
					{quoteText}
				</blockquote>
			</div>
		</WrapperSection>
	);
};

export default QuoteComponent;
