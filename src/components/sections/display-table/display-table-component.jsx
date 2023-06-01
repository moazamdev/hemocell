import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { HiPencil } from "react-icons/hi";
import InputRenderingBlock from "../../utility-functions/input-rendering-block";

const DisplayTableComponent = ({
	tableHeader,
	filterData,
	filter,
	handleCheckboxChange,
	type,
	handleUpdateClick,
	handleDelete,
	status,
	selectedId,
	setStatus,
	setSelectedId,
	updatedData,
	setUpdatedData,
	editing = true,
}) => {
	const tableDataClasses = "border border-[#ddd] px-4 py-4";

	return (
		<table className="mt-10 shadow-lg bg-white w-full">
			<thead className="bg-dark p-4 text-off_white font-normal border border-dark">
				<tr>
					{tableHeader.map((item) => (
						<th
							className="px-4 py-4 font-normal text-[14px] text-start uppercase tracking-[.3em] border-rmd"
							key={item}
						>
							{item}
						</th>
					))}
				</tr>
			</thead>

			<tbody>
				{filterData(filter)
					.map((item) => (
						<tr
							key={item.id}
							className={`border-b border-off_white p-4 ${
								(item.donated ||
									item.given ||
									item.answered ||
									item.checked ||
									item.done) &&
								`bg-[#eee]`
							}`}
						>
							<td className={tableDataClasses}>
								<InputRenderingBlock
									inputType="name"
									itemId={item.id}
									itemType={item.name}
									status={status}
									selectedId={selectedId}
									updatedData={updatedData}
									setUpdatedData={setUpdatedData}
								/>
							</td>

							<td className={tableDataClasses}>
								<a
									href={`mailto:${item.email}`}
									target="_blank"
								>
									{item.email}
								</a>
							</td>

							<td className={tableDataClasses}>
								<InputRenderingBlock
									inputType="phone"
									itemId={item.id}
									itemType={item.phone}
									status={status}
									selectedId={selectedId}
									updatedData={updatedData}
									setUpdatedData={setUpdatedData}
								/>
							</td>

							{(type == "need-blood" ||
								type == "donate-blood") && (
								<td className={tableDataClasses}>
									<InputRenderingBlock
										inputType="bloodType"
										itemId={item.id}
										itemType={item.bloodType}
										status={status}
										selectedId={selectedId}
										updatedData={updatedData}
										setUpdatedData={setUpdatedData}
									/>
								</td>
							)}
							{type == "new-users" && (
								<>
									<td className={tableDataClasses}>
										<InputRenderingBlock
											itemType={item.date.substring(
												0,
												10
											)}
											// itemType={item.date}
											editing={editing}
										/>
									</td>

									<td className={`${tableDataClasses}`}>
										<Link
											className={`bg-[#eee] py-2 px-4 ${
												item.source == "donate-blood" &&
												"bg-[#ffdede]"
											} ${
												item.source == "need-blood" &&
												"bg-[#defbff]"
											} ${
												item.source ==
													"host-blood-drive" &&
												"bg-[#fff8de]"
											} ${
												item.source == "need-help" &&
												"bg-[#deecff]"
											}`}
											to={`/admin/${item.source}`}
										>
											<InputRenderingBlock
												itemType={item.source}
												editing={editing}
											/>
										</Link>
									</td>
								</>
							)}
							{type === "host-blood-drive" && (
								<>
									<td className={tableDataClasses}>
										<InputRenderingBlock
											inputType="institute"
											itemId={item.id}
											itemType={item.institute}
											status={status}
											selectedId={selectedId}
											updatedData={updatedData}
											setUpdatedData={setUpdatedData}
										/>
									</td>
									<td className={tableDataClasses}>
										<InputRenderingBlock
											inputType="designation"
											itemId={item.id}
											itemType={item.designation}
											status={status}
											selectedId={selectedId}
											updatedData={updatedData}
											setUpdatedData={setUpdatedData}
										/>
									</td>
									<td className={tableDataClasses}>
										<InputRenderingBlock
											inputType="city"
											itemId={item.id}
											itemType={item.city}
											status={status}
											selectedId={selectedId}
											updatedData={updatedData}
											setUpdatedData={setUpdatedData}
										/>
									</td>
								</>
							)}

							{/* MESSAGE OR REASON */}

							{type === "need-help" && (
								<td className={tableDataClasses}>
									<InputRenderingBlock
										inputType="reason"
										itemId={item.id}
										itemType={item.reason}
										status={status}
										selectedId={selectedId}
										updatedData={updatedData}
										setUpdatedData={setUpdatedData}
									/>
								</td>
							)}
							{type !== "new-users" && (
								<td className={tableDataClasses}>
									<InputRenderingBlock
										inputType="message"
										itemId={item.id}
										itemType={item.message}
										status={status}
										selectedId={selectedId}
										updatedData={updatedData}
										setUpdatedData={setUpdatedData}
									/>
								</td>
							)}

							{/* CHECKBOXES */}
							{type !== "new-users" && (
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
													handleCheckboxChange(
														item.id
													)
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
													handleCheckboxChange(
														item.id
													)
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
													handleCheckboxChange(
														item.id
													)
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
													handleCheckboxChange(
														item.id
													)
												}
												checked={item.answered && true}
											/>
											{` `}
											{item.answered ? "Yes" : "No"}
										</label>
									)}
								</td>
							)}
							<td
								className={`${tableDataClasses} flex flex-row gap-5`}
							>
								{editing &&
									(status == "editing" &&
									item.id == selectedId ? (
										<a
											href=""
											onClick={(e) => {
												e.preventDefault();
												setSelectedId(null);
												setStatus("normal");
												handleUpdateClick(item.id);
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
											}}
											className="text-green text-[25px]"
										>
											<HiPencil />
										</a>
									))}

								<a
									href=""
									onClick={() => handleDelete(item.id)}
									className="text-red text-[25px]"
								>
									<RxCrossCircled />
								</a>
								{type === "new-users" && (
									<label
										className={`cursor-pointer font-semibold ${
											item.checked == true
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
											checked={item.checked && true}
										/>
										{` `}
										{item.checked ? "Yes" : "No"}
									</label>
								)}
							</td>
						</tr>
					))
					.reverse()}
			</tbody>
		</table>
	);
};

export default DisplayTableComponent;
