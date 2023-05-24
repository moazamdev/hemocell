import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Sidebar from "../sidebar/sidebar";
import HeaderStats from "../sections/header-stats/header_stats";
import AdminNavbar from "../sections/admin-navbar/admin-navbar";

import Dashboard from "../views/admin/dashboard";
import AdminDonateBlood from "../views/admin/admin-donate-blood";
import AdminNeedBlood from "../views/admin/admin-need-blood";
import AdminHostBloodDrive from "../views/admin/admin-host-blood-drive";
import AdminNeedHelp from "../views/admin/admin-need-help";

// views

export default function Admin() {
	return (
		<>
			<Sidebar />
			<div className="relative md:ml-64 bg-blueGray-100">
				{/* <AdminNavbar /> */}
				{/* Header */}
				<HeaderStats />
				<div className="px-4 bg-off_white md:px-10 mx-auto w-full">
					<Routes>
						<Route
							path="dashboard"
                            exact
							element={<Dashboard />}
						/>
						<Route
							path="donate-blood"
                            exact
							element={<AdminDonateBlood />}
                            />
						<Route
							path="need-blood"
                            exact
							element={<AdminNeedBlood />}
                            />
						<Route
							path="host-blood-drive"
                            exact
							element={<AdminHostBloodDrive />}
                            />
						<Route
							path="need-help"
                            exact
							element={<AdminNeedHelp />}
                            />
						<Route
							path="/redirect"
                    
							element={<Navigate to="/admin/dashboard" />}
						/>
						{/* <Navigate from="/admin" to="/admin/dashboard" /> */}
					</Routes>
					{/* <FooterAdmin /> */}
				</div>
			</div>
		</>
	);
}

// Help me write the code so that when the user goes to the specific route, the element is rendered in the main section of the admin layout.
