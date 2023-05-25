/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState("hidden");
	return (
		<>
			<nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
				<div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
					{/* Toggler */}
					<button
						className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
						type="button"
						onClick={() =>
							setCollapseShow("bg-white m-2 py-3 px-6")
						}
					>
						<i className="fas fa-bars"></i>
					</button>
					{/* Brand */}
					<Link
						className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
						to="/"
					>
						HemoCell
					</Link>
					{/* User */}
					{/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
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
						<div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
							<div className="flex flex-wrap">
								<div className="w-6/12">
									<Link
										className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
										to="/"
									>
										HemoCell
									</Link>
								</div>
								<div className="w-6/12 flex justify-end">
									<button
										type="button"
										className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
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
						<h6 className="md:min-w-full text-red text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							Users Data
						</h6>
						{/* Navigation */}

						<ul className="md:flex-col md:min-w-full flex flex-col list-none">
							<li className="items-center">
								<Link
									className={
										"text-[16px] py-3 font-bold block " +
										(window.location.href.indexOf(
											"/admin"
										) !== -1
											? "text-red hover:text-lightBlue-600"
											: "text-dark_gray hover:text-blueGray-500")
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
											"/admin/donate-blood"
										) !== -1
											? "text-red hover:text-lightBlue-600"
											: "text-dark_gray hover:text-blueGray-500")
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
											"/admin/need-blood"
										) !== -1
											? "text-red hover:text-lightBlue-600"
											: "text-dark_gray hover:text-blueGray-500")
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
											"/admin/host-blood-drive"
										) !== -1
											? "text-red hover:text-lightBlue-600"
											: "text-dark_gray hover:text-blueGray-500")
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
											"/admin/need-help"
										) !== -1
											? "text-red hover:text-lightBlue-600"
											: "text-dark_gray hover:text-blueGray-500")
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
						<h6 className="md:min-w-full text-red text-xs uppercase font-bold block pt-1 pb-4 no-underline">
							No Layout Pages
						</h6>
						{/* Navigation */}

						<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
							<li className="items-center">
								<Link
									className="text-dark_gray hover:text-blueGray-500 text-[16px] py-3 font-bold block"
									to="/"
								>
									Landing Page
								</Link>
							</li>

							<li className="items-center">
								<Link
									className="text-dark_gray hover:text-blueGray-500 text-[16px] py-3 font-bold block"
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
