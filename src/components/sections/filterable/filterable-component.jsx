const FilterableComponent = ({
	filter,
	handleSearchChange,
	optionsData,
	selectedOpt,
	handleInputChange,
}) => {
	return (
		<div className="flex justify-start flex-row ">
			<div className="flex flex-row">
				<input
					type="text"
					placeholder="Search"
					value={filter}
					onChange={handleSearchChange}
					className="border-2 px-4 py-2 rounded-rsm placeholder:text-dark shadow-sm border-none outline-none bg-[#ddd]  focus:outline-none focus:border-blue-500"
				/>
			</div>
			<div className="flex flex-row space-x-2">
				<div className="flex flex-row space-x-2 mt-2">
					{optionsData.map((item) => (
						<label
							className="inline-flex items-center"
							key={item.id}
						>
							<input
								type="radio"
								name={item.value}
								value={item.value}
								checked={selectedOpt === item.value}
								className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
								onChange={handleInputChange}
							/>
							<span className="ml-2 mr-2 text-sm">
								{item.name}
							</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
};

export default FilterableComponent;
