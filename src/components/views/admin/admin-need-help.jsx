import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderStats from "../../sections/header-stats/header_stats";
import DisplayTableComponent from "../../sections/display-table/display-table-component";
import FilterableComponent from "../../sections/filterable/filterable-component";

export default function AdminNeedHelp() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedOpt, setSelectedOpt] = useState("name");

	useEffect(() => {
		axios
			.get("http://localhost:3001/api/need-help")
			.then((response) => {
				setData(response.data);
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const filterData = (search) => {
		return data.filter((item) => {
			let matches = true;

			if (selectedOpt === "all") {
				return true;
			} else if (
				selectedOpt === "answered" &&
				"no".toLowerCase().includes(search.toLowerCase()) &&
				item.answered === 0
			) {
				matches = true;
			} else if (
				selectedOpt === "answered" &&
				"yes".toLowerCase().includes(search.toLowerCase()) &&
				item.answered === 1
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

	const handleSearchChange = (e) => {
		setFilter(e.target.value);
	};

	const handleInputChange = (e) => {
		setSelectedOpt(e.target.value);
	};

	const handleHelpNeedChange = (id) => {
		const item = data.find((item) => item.id === id);
		let status = !item.answered;

		axios
			.put(`http://localhost:3001/api/need-help/answered`, {
				status,
				id,
			})
			.then((response) => {
				setData(
					data.map((item) =>
						item.id === id ? { ...item, answered: status } : item
					)
				);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const optionsData = [
		{ id: 1, name: "All", value: "all" },
		{ id: 2, name: "Name", value: "name" },
		{ id: 3, name: "Phone", value: "phone" },
		{ id: 4, name: "Email", value: "email" },
		{ id: 5, name: "Reason", value: "reason" },
		{ id: 6, name: "Answered", value: "answered" },
	];

	const tableHeader = [
		"Name",
		"Email",
		"Phone",
		"Reason",
		"Message",
		"Answered",
	];

	return (
		<>
			<HeaderStats heading="Help Needing Users" />{" "}
			<div className="bg-white p-10 m-10 -mt-20 rounded-rsm">
				<FilterableComponent
					filter={filter}
					handleSearchChange={handleSearchChange}
					optionsData={optionsData}
					selectedOpt={selectedOpt}
					handleInputChange={handleInputChange}
				/>

				<div className="overflow-x-scroll">
					<DisplayTableComponent
						tableHeader={tableHeader}
						filterData={filterData}
						filter={filter}
						handleCheckboxChange={handleHelpNeedChange}
						type={"need-help"}
					/>
				</div>
			</div>
		</>
	);
}
