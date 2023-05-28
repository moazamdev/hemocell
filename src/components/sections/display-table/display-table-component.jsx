import { useEffect, useState } from "react";
const DisplayTableComponent = ({
	tableHeader,
	filterData,
	data,
	filter,
	handleCheckboxChange,
	type,
	handleEdit,
	handleDelete,
}) => {
	const [status, setStatus] = useState("normal");
	const [selectedId, setSelectedId] = useState(null);
	const [formName, setFormName] = useState("");

	useEffect(() => {
		data.map((item) => {
			if (item.id == selectedId) {
				setFormName(item.name);
			}
		});
	}, [selectedId]);

	// useEffect(() => {
	// 	if (status == "done") {
	// 		setSelectedId(null);
	// 	}

	// 	if (status == "pending") {
	// 		setFormName("");
	// 	}
	// }, [status]);

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
					<tr
						key={item.id}
						className={`border-b border-off_white p-4 ${
							(item.donated ||
								item.given ||
								item.answered ||
								item.done) &&
							`bg-[#eee]`
						}`}
					>
						<td className={tableDataClasses}>
							{status == "editing" && selectedId == item.id ? (
								<input
									type="text"
									className="border border-[#999] px-4 py-2 w-full bg-[#e0e0e0]"
									value={formName}
									onChange={(e) => {
										e.preventDefault();
										setFormName(e.target.value);
									}}
								/>
							) : (
								item.name
							)}
						</td>
						<td className={tableDataClasses}>
							<a href={`mailto:${item.email}`} target="_blank">
								{item.email}
							</a>
						</td>
						<td className={tableDataClasses}>{item.phone}</td>
						{(type == "need-blood" || type == "donate-blood") && (
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
						<td
							className={`${tableDataClasses} flex flex-row gap-5`}
						>
							{status == "editing" && item.id == selectedId ? (
								<a
									href=""
									onClick={(e) => {
										e.preventDefault();
										setSelectedId(null);
										setStatus("normal");
										// handleEdit(item.id);
									}}
									className="text-green text-[25px]"
								>
									✔
								</a>
							) : (
								<a
									href=""
									onClick={(e) => {
										e.preventDefault();
										setSelectedId(item.id);
										setStatus("editing");
										// handleEdit(item.id);
									}}
									className="text-green text-[25px]"
								>
									✎
								</a>
							)}
							<a
								href=""
								onClick={() => handleDelete(item.id)}
								className="text-red text-[25px]"
							>
								⨷
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default DisplayTableComponent;
