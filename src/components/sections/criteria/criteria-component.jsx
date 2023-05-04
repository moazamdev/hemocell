import "./criteria-styles.scss";

import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import ListComponent from "../list/list-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const CriteriaComponent = ({
	subheadingText,
	headingText,
	paraText,
	classHint,
}) => {
	return (
		<WrapperSection>
			<div
				className={`${classHint} wrapper flex flex-col justify-center items-start w-full relative p-6 py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
			>
				<GroupedHeadingComponent
					subheadingText={subheadingText}
					headingText={headingText}
					mode="light"
				/>
				{paraText.map((itemText, index) => (
					<ListComponent key={index} itemText={itemText} />
				))}
			</div>
		</WrapperSection>
	);
};

export default CriteriaComponent;
