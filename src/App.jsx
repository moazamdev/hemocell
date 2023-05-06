import HomePage from "./components/pages/home/home-page";
import { Routes, Route } from "react-router-dom";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import HeaderComponent from "./components/sections/header/header-component";
import BeforeFooterCTA from "./components/sections/before-footer-cta/before-footer-cta-components";
import FooterComponent from "./components/sections/footer/footer-component";
import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";
import ContactPage from "./components/pages/contact/contact-page";

export default function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				<Route
					path="/host-blood-drive"
					element={<HostBloodDrivePage />}
				/>
				<Route
					path="/contact"
					element={<ContactPage />}
				/>
			</Routes>
			<BeforeFooterCTA />
			<FooterComponent />
		</>
	);
}
