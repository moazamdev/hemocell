const WrapperSection = ({ children }) => {
	return (
		<section className="two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 py-[50px]">
			<div className="two-cta-container relative w-[min(100%_-_15px,1250px)] flex flex-row justify-center mx-auto my-0 p-2.5">
				{children}
			</div>
		</section>
	);
};

export default WrapperSection;
