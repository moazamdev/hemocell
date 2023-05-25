import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderStats from "../../sections/header-stats/header_stats";

export default function AdminDonateBlood() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedOpt, setSelectedOpt] = useState("name");

	useEffect(() => {
		axios
			.get("http://localhost:3001/api/donate-blood")
			.then((response) => {
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleOptionChange = (event) => {
		setSelectedOpt(event.target.value);
	};

	const filterData = (search) => {
		return data.filter((item) => {
			let matches = true;

			// if (filter.toLowerCase() === "no" && item.donated === 0 && selectedOpt === "donated") {
			// 	matches = true;
			// } else if (filter.toLowerCase() === "yes" && item[selectedOpt] === 1 && selectedOpt === "donated") {
			// 	matches = true;
			// }

			if (
				selectedOpt === "donated" &&
				"no".toLowerCase().includes(search) &&
				item.donated === 0
			) {
				matches = true;
			} else if (
				selectedOpt === "donated" &&
				"yes".toLowerCase().includes(search) &&
				item.donated === 1
			) {
				matches = true;
			} else if (
				item[selectedOpt]
					.toString()
					.toLowerCase()
					.includes(search.toLowerCase())
			) {
				matches = true;
			} else {
				matches = false;
			}
			return matches;
		});
	};

	// const filterData = (search) => {
	// 	return data.filter((item) => {
	// 		let matches = true;

	// 		for (const key of filterOptions) {
	// 			if (typeof key === "string") {
	// 				if (
	// 					item[key]
	// 						.toString()
	// 						.toLowerCase()
	// 						.includes(search.toLowerCase())
	// 				) {
	// 					matches = true;
	// 				} else {
	// 					matches = false;
	// 				}
	// 			} else {
	// 				if (item[key] === search) {
	// 					matches = true;
	// 				} else {
	// 					matches = false;
	// 				}
	// 			}
	// 		}

	// 		return matches;
	// 	});
	// };

	const handleSearchChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<>
			<HeaderStats heading="Blood Donating Users" />
			{/* <h2>Donate Blood Data</h2> */}
			<div className="bg-white p-10 m-10 -mt-20 rounded-rsm">
				<div className="flex justify-start flex-row ">
					<div className="flex flex-row">
						<input
							type="text"
							placeholder="Search"
							value={filter}
							onChange={handleSearchChange}
							className="border-2 px-4 py-2 rounded-rsm placeholder:text-dark shadow-sm border-none outline-none bg-[#ddd]  focus:outline-none focus:border-blue-500"
						/>
						{/* <button className="px-4 py-2 border-blue-500 text-white bg-dark_red rounded-md">
						Search
					</button> */}
					</div>
					<div className="flex flex-row space-x-2">
						<div className="flex flex-row space-x-2 mt-2">
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="all"
									checked={selectedOpt === ""}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) => setSelectedOpt("")}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"all",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) => item !== "all"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">All</span>
							</label>
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="filter"
									value="name"
									checked={selectedOpt === "name"}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) =>
										setSelectedOpt(event.target.value)
									}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"name",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) => item !== "name"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">Name</span>
							</label>
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="filter"
									value="bloodType"
									checked={selectedOpt === "bloodType"}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) =>
										setSelectedOpt(event.target.value)
									}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"bloodType",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) =>
									// 					item !== "bloodType"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">
									Blood Type
								</span>
							</label>
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="filter"
									value="email"
									checked={selectedOpt === "email"}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) =>
										setSelectedOpt(event.target.value)
									}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"email",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) => item !== "email"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">Email</span>
							</label>
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="filter"
									value="phone"
									checked={selectedOpt === "phone"}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) =>
										setSelectedOpt(event.target.value)
									}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"phone",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) => item !== "phone"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">Phone</span>
							</label>
							<label className="inline-flex items-center">
								<input
									type="radio"
									name="filter"
									value="donated"
									checked={selectedOpt === "donated"}
									className="ml-2 mr-2 border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
									onChange={(event) =>
										setSelectedOpt(event.target.value)
									}
									// onChange={(event) => {
									// 	if (event.target.checked) {
									// 		setFilterOptions([
									// 			...filterOptions,
									// 			"donated",
									// 		]);
									// 	} else {
									// 		setFilterOptions(
									// 			filterOptions.filter(
									// 				(item) => item !== "donated"
									// 			)
									// 		);
									// 	}
									// }}
								/>
								<span className="ml-2 mr-2 text-sm">
									Donated
								</span>
							</label>
						</div>
					</div>
				</div>
				<table className="mt-10 shadow-lg bg-white w-full">
					<thead className="bg-dark p-4 text-off_white font-normal border border-dark">
						<tr>
							<th className="px-4 py-4 font-normal text-start">
								Name
							</th>
							<th className="px-4 py-4 font-normal text-start">
								Email
							</th>
							<th className="px-4 py-4 font-normal text-start">
								Phone
							</th>
							<th className="px-4 py-4 font-normal text-start">
								Blood Type
							</th>
							<th className="px-4 py-4 font-normal text-start">
								Message
							</th>
							<th className="px-4 py-4 font-normal text-start">
								Donated
							</th>
						</tr>
					</thead>
					<tbody>
						{filterData(filter).map((item) => (
							<tr
								key={item.id}
								className="border-b border-off_white p-4"
							>
								<td className="border border-[#ddd] px-4 py-2">
									{item.name}
								</td>
								<td className="border border-[#ddd] px-4 py-2">
									{item.email}
								</td>
								<td className="border border-[#ddd] px-4 py-2">
									{item.phone}
								</td>
								<td className="border border-[#ddd] px-4 py-2">
									{item.bloodType}
								</td>
								<td className="border border-[#ddd] px-4 py-2">
									{item.message}
								</td>
								<td className="border border-[#ddd] px-4 py-2">
									{item.donated ? "Yes" : "No"}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}

// import React from "react";
// import HeaderStats from "../../sections/header-stats/header_stats";

// export default function AdminDonateBlood() {
// 	return (
// 		<>
// 			<HeaderStats heading="Blood Donating Users" />
// 			<h2>Donate Blood Data</h2>
// 			{/* create a div which would wrap the content for this page. the content i want in this div is a search filter with different search filter like (filtering with name, blood type, email, phone). below the search filter i want to display the table that would fetch the data from the mysql database (i have created that) and would display that.  */}

// 			<div className="flex flex-wrap">
// 				<div className="w-full lg:w-12/12 xl:w-12/12 px-4">
// 					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
// 						<div className="rounded-t mb-0 px-4 py-3 border-0">
// 							<div className="flex flex-wrap items-center">
// 								<div className="relative w-full px-4 max-w-full flex-grow flex-1">
// 									<h3 className="font-semibold text-base text-blueGray-700">
// 										Donating Users
// 									</h3>
// 								</div>
// 								<div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
// 									<button
// 										className="bg-blueGray-800 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
// 										type="button"
// 									>
// 										<i className="fas fa-plus mr-2"></i> Add User
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="block w-full overflow-x-auto">
// 							{/* Projects table */}
// 							<table className="items-center w-full bg-transparent border-collapse">
// 								<thead>
// 									<tr>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Name
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Email
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Phone
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Blood Type
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Location
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
// 											Donated
// 										</th>
// 										<th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
// 									</tr>
// 								</thead>

// 						</table>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 		</>
// 	);
// }

// /*
// Well this is my code and now help me write all code for this page which i could just copy and paste.
// Here we go.
// i want to create a table which would display the data from the database. the data would be fetched from the database and would be displayed in the table. the table would have the following columns:
// 1. Name
// 2. Email
// 3. Phone
// 4. Blood Type
// 5. Message
// 6. Donated

// the table would have a search filter which would filter the data from the database and would display the data in the table. the search filter would have the following options:

// 1. Name
// 2. Blood Type
// 3. Email
// 4. Phone
// 5. Donated

// in addition to this their would be a small search field and a button to trigger the filtering. when the admin selects the filter option and enters the data in the search field and clicks the button the table would display the data according to the filter option selected by the admin. these are the filter options:
// 1. Name
// 2. Blood Type
// 3. Email
// 4. Phone
// 5. Donated

// by default the table would display all the data from the database.

// below the search filter i want to display the table that would fetch the data from the mysql database (i have created that) and would display that. you can use Axios to create the API call to fetch the data from the database. i have created the API for that. you can use the following API to fetch the data from the database:
// https:localhost:3001/api/donate-blood

// the table name is donate_blood. the table has the following columns:
// 1. id
// 2. name
// 3. email
// 4. phone
// 5. blood_type
// 6. message
// 7. donated

// Write full code for this page and i will copy and paste it.

// */
// //
