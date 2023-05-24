import HomePage from "./components/pages/home/home-page";
import { Routes, Route } from "react-router-dom";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";
import ContactPage from "./components/pages/contact/contact-page";
import Admin from "./components/layouts/admin";

export default function App() {
	return (
		<>
			{/* <HeaderComponent /> */}
			{/* <BrowserRouter> */}
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route
					path="/host-blood-drive"
					element={<HostBloodDrivePage />}
				/>
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/admin/*" element={<Admin />} />
			</Routes>
			{/* </BrowserRouter> */}
			{/* <BeforeFooterCTA />
			<FooterComponent /> */}
		</>
	);
}
