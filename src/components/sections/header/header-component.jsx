import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Host Blood Drive", href: "/host-blood-drive" },
	{ name: "Donate Money", href: "https://donorbox.org/donate-money-11" },
	{ name: "Help Needed", href: "/contact" },
	{ name: "Need Blood", href: "/need-blood" },
	{ name: "Donate Blood", href: "/donate-blood" },
];
const logoUrl = "../src/assets/logos/HemoCell-Logo-Black.png";
const logoUrlWhite = "../src/assets/logos/HemoCell-Logo-White.png";
const compnayName = "HemoCell Blood Bank";

const HeaderComponent = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="absolute inset-x-0 top-0 z-50 border-b border-white/[.2]">
			<nav
				className="flex items-center justify-between p-6 lg:px-8 w-[min(1250px,100%-15px)] m-auto"
				aria-label="Global"
			>
				{/* Logo */}
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">{compnayName}</span>
						<img
							className="h-10 w-auto"
							src={logoUrlWhite}
							alt=""
						/>
					</a>
				</div>

				{/* Mobile menu button hidden on large screens */}
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-off_white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				{/* Desktop navigation */}
				<div className="hidden lg:flex lg:gap-x-12 nth">
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							onClick={() => setMobileMenuOpen(false)}
							to={item.href}
							className="text-sm font-medium leading-6 text-off_white"
						>
							{item.name}
						</NavLink>
					))}
				</div>
			</nav>

			{/* Mobile menu */}
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">{compnayName}</span>
							<img className="h-12 w-auto" src={logoUrl} alt="" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<NavLink
										key={item.name}
										onClick={() => setMobileMenuOpen(false)}
										to={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default HeaderComponent;
