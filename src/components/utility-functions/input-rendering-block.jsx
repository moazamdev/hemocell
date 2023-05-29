const InputRenderingBlock = ({
	inputType,
	itemId,
	itemType,
	status,
	selectedId,
	updatedData,
	setUpdatedData,
}) => {
	return status === "editing" && selectedId === itemId ? (
		<input
			type="text"
			className="border border-[#999] px-4 py-2 w-full bg-[#e0e0e0]"
			value={updatedData[inputType]}
			name={inputType}
			onChange={(e) => {
				e.preventDefault();
				setUpdatedData({
					...updatedData,
					[e.target.name]: e.target.value,
				});
			}}
		/>
	) : (
		itemType
	);
};

export default InputRenderingBlock;