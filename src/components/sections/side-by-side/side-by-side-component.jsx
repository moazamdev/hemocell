import "./side-by-side-styles.scss";

import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ParaComponent from "../para/para-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";
import ButtonComponent from "../button/button-component";

const SideBySideComponent = ({
	subheadingText,
	headingText,
	paraText,
	imageUrl,
	buttonText,
	buttonLink,
	classHint,
	buttonHave,
}) => {
	return (
		<WrapperSection>
			<div className="wrapper grid grid-cols0-1 lg:grid-cols-2">
				<div
					className={`my-image-col rounded-rmd z-[25] h-[400px] sm:h-[600px] w-full ${classHint}`}
				></div>
				<div className="content-wrapper p-[15px] py-[50px] sm:p-[50px] flex flex-col justify-center">
					<GroupedHeadingComponent
						subheadingText={subheadingText}
						headingText={headingText}
					/>
					<ParaComponent innerText={paraText} />

					{buttonHave && (
						<ButtonComponent
							buttonText={buttonText}
							buttonLink={buttonLink}
							buttonType={"fill"}
						/>
					)}
				</div>
			</div>
		</WrapperSection>
	);
};

export default SideBySideComponent;
