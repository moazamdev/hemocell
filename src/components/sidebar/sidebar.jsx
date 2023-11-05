/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/HemoCell Logo black.png";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState("hidden");
	return (
		<>
			<nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64">
				<div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
					{/* Toggler */}
					<button
						className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
						type="button"
						onClick={() =>
							setCollapseShow("bg-white m-2 py-3 px-6")
						}
					>
						<i className="fas fa-bars"></i>
					</button>
					{/* Brand */}
					<Link
						className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
						to="/"
					>
						<img src={logo} alt="logo" width={"80%"} />
					</Link>
					{/* User */}
					{/* <ul className="flex flex-wrap items-center list-none md:hidden">
						<li className="relative inline-block">
						<NotificationDropdown />
						</li>
						<li className="relative inline-block">
						<UserDropdown />
						</li>
					</ul> */}
					{/* Collapse */}
					<div
						className={
							"md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
							collapseShow
						}
					>
						{/* Collapse header */}
						<div className="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link
										className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
										to="/"
									>
										HemoCell
									</Link>
								</div>
								<div className="flex justify-end w-6/12">
									<button
										type="button"
										className="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
										onClick={() =>
											setCollapseShow("hidden")
										}
									>
										<i className="fas fa-times"></i>
									</button>
								</div>
							</div>
						</div>
						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
						{/* Heading */}
						<h6 className="md:min-w-full text-red text-xs tracking-[3px] uppercase font-bold block pt-1 pb-4 no-underline">
							Users Data
						</h6>
						{/* Navigation */}

						<ul className="flex flex-col list-none md:flex-col md:min-w-full">
							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/admin"
										) !== -1
											? "text-red hover:text-dark_red"
											: "text-dark_gray hover:text-gray")
									}
									to="/admin"
								>
									Dashboard
								</Link>
							</li>

							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/donate-blood"
										) !== -1
											? "text-red hover:text-dark_red"
											: "text-dark_gray hover:text-gray")
									}
									to="/admin/donate-blood"
								>
									Donate Blood
								</Link>
							</li>

							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/need-blood"
										) !== -1
											? "text-red hover:text-dark_red"
											: "text-dark_gray hover:text-gray")
									}
									to="/admin/need-blood"
								>
									Need Blood
								</Link>
							</li>

							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/host-blood-drive"
										) !== -1
											? "text-red hover:text-dark_red"
											: "text-dark_gray hover:text-gray")
									}
									to="/admin/host-blood-drive"
								>
									Host Blood Drive
								</Link>
							</li>

							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/need-help"
										) !== -1
											? "text-red hover:text-dark_red"
											: "text-dark_gray hover:text-gray")
									}
									to="/admin/need-help"
								>
									Need Help
								</Link>
							</li>
						</ul>

						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
						{/* Heading */}
						<h6 className="md:min-w-full text-red text-xs tracking-[3px] uppercase font-bold block pt-1 pb-4 no-underline">
							Resources
						</h6>
						{/* Navigation */}

						<ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
							<li className="items-center">
								<Link
									className="text-dark_gray hover:text-gray text-[16px] py-3 font-bold block"
									to="/"
								>
									Landing Page
								</Link>
							</li>

							<li className="items-center">
								<Link
									className="text-dark_gray hover:text-gray text-[16px] py-3 font-bold block"
									to="/admin"
								>
									Dashboard
								</Link>
							</li>
						</ul>

						{/* Divider */}
						<hr className="my-4 md:min-w-full" />
					</div>
				</div>
			</nav>
		</>
	);
}
