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
			<div className="wrapper grid grid-cols-[1fr_1fr]">
				<div
					className={`my-image-col rounded-rmd z-[25] overflow-hidden h-[600px] w-full ${classHint}`}
				>
					<img src={imageUrl} alt="" />
				</div>
				<div className="content-wrapper p-[50px] flex flex-col justify-center">
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
