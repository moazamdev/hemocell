import "./form-component-styles.scss";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const FormComponent = ({
	fields,
	heading,
	buttonText,
	formData,
	setFormData,
	handleSubmit,
}) => {
	const inputStyles = `block w-full flex justify-start items-start rounded-rsm border-0 px-8 py-3 md:px-10 md:py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6`;
	return (
		<WrapperSection>
			<div
				className={`form-wrapper -mt-[10em] w-full relative p-6 py-10 lg:p-20 lg:pb-10 rounded-rmd z-[25] overflow-hidden`}
			>
				<h3 className="not-italic text-center font-medium text-[16px] sm:text-[25px] leading-[34px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-white">
					{heading}
				</h3>
				<form
					className="contact-form grid grid-cols-1 sm:grid-cols-2 gap-5 w-full relative sm:p-6 py-8 sm:p-10 rounded-rmd z-[25] overflow-hidden"
					method="POST"
					onSubmit={handleSubmit}
				>
					{fields.map((field, index) => (
						<input
							onChange={(e) =>
								setFormData({
									...formData,
									[field.name]: e.target.value,
								})
							}
							value={formData[field.name]}
							key={index}
							type={field.type}
							name={field.name}
							id={field.name}
							className={inputStyles}
							placeholder={field.placeholder}
							required={field.required}
						/>
					))}
					<div className="grid sm:col-span-2 gap-5 w-full">
						<textarea
							onChange={(e) =>
								setFormData({
									...formData,
									message: e.target.value,
								})
							}
							value={formData.message}
							type="text"
							name="name"
							id="name"
							className={`${inputStyles} h-[8em]`}
							row={10}
							placeholder="Any other information..."
						/>
					</div>
					<div className="grid place-items-center sm:col-span-2 gap-5 mb-5 w-full">
						<input
							type="submit"
							name="submit"
							id="submit"
							className={` rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm w-fit font-bold w-fit cursor-pointer`}
							value={buttonText}
						/>
					</div>
				</form>
			</div>
		</WrapperSection>
	);
};

export default FormComponent;

// import "./form-component-styles.scss";
// import WrapperSection from "../wrapper-section/wrapper-section-component";

// const FormComponent = ({ heading, fields, onSubmit }) => {
// 	const inputStyles = `block w-full flex justify-start items-start rounded-rsm border-0 px-10 py-4 bg-light text-white ring-none placeholder:text-white outline-none focus:ring-1 focus:ring-center focus:bg-dark focus:ring-light sm:text-sm sm:leading-6`;
// 	return (
// 		<WrapperSection>
// 			<div
// 				className={`form-wrapper flex flex-col justify-center place-items-center -mt-[10em] w-full relative p-6 py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
// 			>
// 				<h3 className="not-italic font-medium text-[25px] leading-[34px] tracking-[0.3em] uppercase text-white">
// 					{heading}
// 				</h3>
// 				<form
// 					className="flex flex-col justify-center items-start w-full relative p-6 py-10 sm:p-10 rounded-rmd z-[25] overflow-hidden"
// 					method="POST"
//                     onSubmit={onSubmit}
// 				>

// 					<div className="grid grid-cols-2 place-items-center gap-5 mb-5 w-full">
// 						<input
// 							type="text"
// 							name="name"
// 							id="name"
// 							className={inputStyles}
// 							placeholder="Name"
// 						/>
// 						<input
// 							type="email"
// 							name="email"
// 							id="price"
// 							className={inputStyles}
// 							placeholder="Email"
// 						/>
// 					</div>
// 					<div className="grid grid-cols-2 place-items-center gap-5 mb-5 w-full">
// 						<input
// 							type="number"
// 							name="phone"
// 							id="phone"
// 							className={inputStyles}
// 							placeholder="Phone"
// 						/>
// 						<input
// 							type="email"
// 							name="email"
// 							id="price"
// 							className={inputStyles}
// 							placeholder="Email"
// 						/>
// 					</div>
// 					<div className="grid grid-cols-1 place-items-center gap-5 mb-5 w-full">
// 						<textarea
// 							type="text"
// 							name="name"
// 							id="name"
// 							className={`${inputStyles} h-[8em]`}
// 							row={10}
// 							placeholder="Any other information..."
// 						/>
// 					</div>
// 					<div className="grid place-items-center gap-5 mb-5 w-full">
// 						<input
// 							type="submit"
// 							name="submit"
// 							id="submit"
// 							className={` rounded-rsm border border-white hover:border-red text-dark bg-white hover:bg-red hover:text-white transition px-10 py-4 text-sm w-fit font-bold w-fit cursor-pointer`}
// 							value="Host Now"
// 						/>
// 					</div>
// 				</form>
// 			</div>
// 		</WrapperSection>
// 	);
// };

// export default FormComponent;
