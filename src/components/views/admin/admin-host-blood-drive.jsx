import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderStats from "../../sections/header-stats/header_stats";
import DisplayTableComponent from "../../sections/display-table/display-table-component";
import FilterableComponent from "../../sections/filterable/filterable-component";

export default function AdminHostBloodDrive() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("");
	const [selectedOpt, setSelectedOpt] = useState("name");

	const [status, setStatus] = useState("normal");
	const [selectedId, setSelectedId] = useState(null);
	const [updatedData, setUpdatedData] = useState({
		name: "",
		phone: "",
		institute: "",
		designation: "",
		city: "",
		message: "",
	});

	useEffect(() => {
		axios
			.get("http://localhost:3001/api/host-blood-drive")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		data.map((item) => {
			if (item.id == selectedId) {
				setUpdatedData({
					name: item.name,
					phone: item.phone,
					institute: item.institute,
					designation: item.designation,
					city: item.city,
					message: item.message,
				});
				// console.log("useEffect");
			}
		});
	}, [selectedId]);

	const filterData = (search) => {
		return data.filter((item) => {
			let matches = true;

			if (selectedOpt === "all") {
				return true;
			} else if (
				selectedOpt === "done" &&
				"no".toLowerCase().includes(search.toLowerCase()) &&
				item.done === 0
			) {
				matches = true;
			} else if (
				selectedOpt === "done" &&
				"yes".toLowerCase().includes(search.toLowerCase()) &&
				item.done === 1
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

	const handleHostChange = (id) => {
		const item = data.find((item) => item.id === id);
		let status = !item.done;

		axios
			.put(`http://localhost:3001/api/host-blood-drive/done`, {
				status,
				id,
			})
			.then((response) => {
				setData(
					data.map((item) =>
						item.id === id ? { ...item, done: status } : item
					)
				);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:3001/api/host-blood-drive/delete/${id}`)
			.then((response) => {
				setData(data.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleUpdateClick = (id) => {
		axios
			.put(`http://localhost:3001/api/host-blood-drive/update/${id}`, {
				updatedData,
			})
			.then((response) => {
				setData(
					data.map((item) =>
						item.id === id
							? {
									...item,
									name: updatedData.name,
									phone: updatedData.phone,
									institute: updatedData.institute,
									designation: updatedData.designation,
									city: updatedData.city,
									message: updatedData.message,
							  }
							: item
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
		{ id: 5, name: "Institute", value: "institute" },
		{ id: 6, name: "Designation", value: "designation" },
		{ id: 7, name: "City", value: "city" },
		{ id: 8, name: "Done", value: "done" },
	];

	const tableHeader = [
		"Name",
		"Email",
		"Phone",
		"Institute",
		"Designation",
		"City",
		"Message",
		"Done",
		"Action",
	];

	return (
		<>
			<HeaderStats heading="Blood Drive Hosting Users" />
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
						handleCheckboxChange={handleHostChange}
						type={"host-blood-drive"}
						handleUpdateClick={handleUpdateClick}
						handleDelete={handleDelete}
						status={status}
						setStatus={setStatus}
						selectedId={selectedId}
						setSelectedId={setSelectedId}
						updatedData={updatedData}
						setUpdatedData={setUpdatedData}
					/>
				</div>
			</div>
		</>
	);
}
