import WrapperSection from "../wrapper-section/wrapper-section-component";

const FormComponent = ({}) => {
	return (
		<WrapperSection>
			<div
				className={`${classHint} form-wrapper flex flex-col justify-center items-start w-full relative p-6 py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
			>

			</div>
		</WrapperSection>
	);
};

export default FormComponent;
