const ListComponent = ({ itemText }) => {
	return (
		<div className="my-text-col">
			<ul className="list-disc list-inside">
				<li className="my-2 list-none">
					<span className="font-medium text-off_white pr-4">
						◯
					</span>
					<span className="font-medium text-off_white">{itemText}</span>
				</li>
			</ul>
		</div>
	);
};

export default ListComponent;
