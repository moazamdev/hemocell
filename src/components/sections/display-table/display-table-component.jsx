const DisplayTableComponent = ({
	tableHeader,
	filterData,
	filter,
	handleCheckboxChange,
	type,
}) => {
	const tableDataClasses = "border border-[#ddd] px-4 py-4";

	return (
		<table className="mt-10 shadow-lg bg-white w-full">
			<thead className="bg-dark p-4 text-off_white font-normal border border-dark">
				<tr>
					{tableHeader.map((item) => (
						<th
							className="px-4 py-4 font-normal text-[14px] text-start uppercase tracking-[.3em]"
							key={item}
						>
							{item}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{filterData(filter).map((item) => (
					<tr key={item.id} className="border-b border-off_white p-4">
						<td className={tableDataClasses}>{item.name}</td>
						<td className={tableDataClasses}>{item.email}</td>
						<td className={tableDataClasses}>{item.phone}</td>
						{((type == "need-blood") ||
							(type == "donate-blood") )&& (
								<td className={tableDataClasses}>
									{item.bloodType}
								</td>
							)}
						{type === "host-blood-drive" && (
							<>
								<td className={tableDataClasses}>
									{item.institute}
								</td>
								<td className={tableDataClasses}>
									{item.designation}
								</td>
								<td className={tableDataClasses}>
									{item.city}
								</td>
							</>
						)}
						{type === "need-help" && (
							<td className={tableDataClasses}>{item.reason}</td>
						)}
						<td className={tableDataClasses}>{item.message}</td>
						<td className={tableDataClasses}>
							{type === "donate-blood" && (
								<label
									className={`cursor-pointer font-semibold ${
										item.donated == true
											? "text-green"
											: "text-red"
									}`}
								>
									<input
										type="checkbox"
										name="checkbox"
										onChange={() =>
											handleCheckboxChange(item.id)
										}
										checked={item.donated && true}
									/>
									{` `}
									{item.donated ? "Yes" : "No"}
								</label>
							)}

							{type === "need-blood" && (
								<label
									className={`cursor-pointer font-semibold ${
										item.given == true
											? "text-green"
											: "text-red"
									}`}
								>
									<input
										type="checkbox"
										name="checkbox"
										onChange={() =>
											handleCheckboxChange(item.id)
										}
										checked={item.given && true}
									/>
									{` `}
									{item.given ? "Yes" : "No"}
								</label>
							)}

							{type === "host-blood-drive" && (
								<label
									className={`cursor-pointer font-semibold ${
										item.done == true
											? "text-green"
											: "text-red"
									}`}
								>
									<input
										type="checkbox"
										name="checkbox"
										onChange={() =>
											handleCheckboxChange(item.id)
										}
										checked={item.done && true}
									/>
									{` `}
									{item.done ? "Yes" : "No"}
								</label>
							)}

							{type === "need-help" && (
								<label
									className={`cursor-pointer font-semibold ${
										item.answered == true
											? "text-green"
											: "text-red"
									}`}
								>
									<input
										type="checkbox"
										name="checkbox"
										onChange={() =>
											handleCheckboxChange(item.id)
										}
										checked={item.answered && true}
									/>
									{` `}
									{item.answered ? "Yes" : "No"}
								</label>
							)}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default DisplayTableComponent;
