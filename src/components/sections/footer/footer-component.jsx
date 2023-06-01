// import "./footer-styles.scss";

import { NavLink } from "react-router-dom";

const FooterComponent = () => {
	const exploreLinks = [
		{
			title: "Home",
			link: "/",
		},
		{
			title: "Donate Blood",
			link: "/donate-blood",
		},
		{
			title: "Request Blood",
			link: "/need-blood",
		},
		{
			title: "Donate Money",
			link: "https://donorbox.org/donate-money-11",
		},
		{
			title: "Host Blood Drive",
			link: "/host-blood-drive",
		},
		{
			title: "Contact",
			link: "/contact",
		},
	];

	const contactLinks = [
		{
			title: "(+92)-304-050-9060",
			link: "tel:+923040509060",
		},
		{
			title: "help@hemocell.com",
			link: "mailto:help@hemocell.com",
		},
		{
			title: "Karachi, Pakistan",
			link: "https://goo.gl/maps/QCLpYP3yyUqdT8HA7",
		},
		{
			title: "Open 24/7",
			link: "/contact",
		},
	];

	return (
		<section className="footer two-cta-wrapper flex flex-col justify-center items-center w-full mx-auto my-0 px-2.5 pt-[70px] pb-[40px] bg-dark">
			<div className="two-cta-container relative w-[min(100%_-_15px,1250px)]  mx-auto my-0 p-2.5">
				<div className="first-section-wrapper grid sm:grid-cols-[1.5fr_1fr_1fr] gap-10">
					<div className="footer-col first-col flex flex-col">
						<h2 className="not-italic font-bold text-[40px] leading-[55px] text-white">
							Hemo<span className="text-[red]">Cell</span>
						</h2>
						<h3 className="not-italic font-normal text-[20px] leading-10 text-[#D9D9D9]">
							You don't have to be a doctor to save a life: Just
							donate blood
						</h3>
					</div>
					<div className="footer-col second-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Explore
						</h3>
						<ul className="flex flex-col gap-2">
							{exploreLinks.map((link, index) => (
								<li key={index}>
									<NavLink
										className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]"
										to={link.link}
									>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					<div className="footer-col third-col">
						<h3 className="not-italic font-medium text-[16px] leading-[27px] tracking-[0.21em] uppercase text-[red] mb-3">
							Contact
						</h3>
						<ul className="flex flex-col gap-2">
							{contactLinks.map((link, index) => (
								<li key={index}>
									<NavLink
										className="not-italic font-medium text-[18px] leading-[34px] text-[#D9D9D9]"
										to={link.link}
									>
										{link.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="footer-col fourth-col text-center mt-10 border-t-[1px] border-off_white/[.2] pt-6">
					<h3 className="not-italic text-center font-regular text-[18px] leading-[34px] text-[#D9D9D9] ">
						©️ 2023 HemoCell - Website design by{" "}
						<a
							href="https://linkedin.com/in/moazamdev"
							className="underline"
							target="_blank"
						>
							AlphaDev
						</a>
					</h3>
				</div>
			</div>
		</section>
	);
};

export default FooterComponent;
