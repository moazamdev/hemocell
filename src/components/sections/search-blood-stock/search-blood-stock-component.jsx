import { useState } from "react";
import GroupedHeadingComponent from "../grouped-heading/grouped-heading-component";
import WrapperSection from "../wrapper-section/wrapper-section-component";

const SearchBloodStockComponent = ({
	subheadingText,
	headingText,
	classHint,
}) => {
	const [bloodGroup, setBloodGroup] = useState("");
	console.log(bloodGroup);
	return (
		<WrapperSection>
			<div
				className={`${classHint} bg-off_white wrapper flex flex-col justify-center items-center w-full relative p-6 py-10 sm:py-20 sm:p-20 rounded-rmd z-[25] overflow-hidden`}
			>
				<GroupedHeadingComponent
					subheadingText={subheadingText}
					headingText={headingText}
					mode="dark"
					position="center"
				/>
				<div className="w-full mt-10">
					<form className="grid grid-cols-1 sm:grid-cols-6 gap-2 w-full">
						<select
							name="bloodGroup"
							id="bloodGroup"
							className="w-full p-5 border sm:col-span-4 border-none bg-[#D9D9D9] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
							onChange={(e) => setBloodGroup(e.target.value)}
							value={bloodGroup}
						>
							<option value="" selected disabled hidden>
								--Select Blood Group--
							</option>
							<option value="A+">A+</option>
							<option value="A-">A-</option>
							<option value="B+">B+</option>
							<option value="B-">B-</option>
							<option value="AB+">AB+</option>
							<option value="AB-">AB-</option>
							<option value="O+">O+</option>
							<option value="O-">O-</option>
						</select>
						<button className="sm:col-span-2 sm:rounded-r-rsm border-dark text-white bg-dark hover:border-dark hover:bg-dark_red hover:text-white transition text-black px-8 py-5 text-sm font-bold">
							Search Availability
						</button>
					</form>

					<div className="mt-10 w-full bg-[#d9d9d9] rounded-rsm p-5 justify-start items-start overflow-x-scroll">
						<table className="w-full overflow-x-scroll">
							<thead>
								<tr className="grid grid-cols-6 text-start mb-5 border-b border-off_white pb-5">
									<th className="col-span-4 text-start text-sm uppercase tracking-widest text-red">
										Blood Group
									</th>
									<th className="col-span-2 text-start text-sm uppercase tracking-widest text-red">
										Availability
									</th>
								</tr>
							</thead>
							<tbody className="overflow-x-scroll">
								<tr className="grid grid-cols-6 text-start mb-2 border-b border-off_white pb-3">
									<td className="col-span-4 text-start sm:text-xl font-semibold">
										A+
									</td>
									<td className="col-span-2 text-start sm:text-xl font-semibold">
										Available
									</td>
								</tr>
								<tr className="grid grid-cols-6 text-start mb-2 border-b border-off_white pb-3">
									<td className="col-span-4 text-start sm:text-xl font-semibold">
										A+
									</td>
									<td className="col-span-2 text-start sm:text-xl font-semibold">
										Not Available
									</td>
								</tr>
								<tr className="grid grid-cols-6 text-start mb-2 border-b border-off_white pb-3">
									<td className="col-span-4 text-start sm:text-xl font-semibold">
										A+
									</td>
									<td className="col-span-2 text-start sm:text-xl font-semibold">
										Available
									</td>
								</tr>
								{/* {employeesList.map((employee) => (
									<tr>
										<td>{employee.name}</td>
										<td>{employee.age}</td>
										<td>{employee.country}</td>
										<td>{employee.position}</td>
										<td>{employee.wage}</td>
									</tr>
								))} */}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</WrapperSection>
	);
};

export default SearchBloodStockComponent;
