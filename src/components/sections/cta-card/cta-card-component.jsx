import React from "react";
import PropTypes from "prop-types";

import { BsArrowUpRight, BsArrowDownLeft } from "react-icons/bs";

export default function CardStats({
	statSubtitle,
	statTitle,
	statArrow,
	statPercent,
	statPercentColor,
	statDescripiron,
	statIconName,
	statIconColor,
}) {
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-off_white rounded-rsm mb-6 xl:mb-0 shadow-xl hover:shadow-lg transition">
				<div className="flex-auto p-4">
					<div className="flex flex-wrap">
						<div className="relative w-full pr-4 max-w-full flex-grow flex-1">
							<h5 className="text-dark_gray tracking-[1px] uppercase font-bold text-xs">
								{statSubtitle}
							</h5>
							<span className="font-semibold text-[25px] text-dark">
								{statTitle}
							</span>
						</div>
						<div className="relative w-auto pl-4 flex-initial">
							<div
								className={
									"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
									statIconColor
								}
							>
								<i className="text-[25px]">{statIconName}</i>
							</div>
						</div>
					</div>
					<p className="text-sm text-blueGray-400 mt-4">
						<span
							className={`${statPercentColor} font-semibold mr-2 ${
								statArrow == "up" ? "text-green" : "text-red"
							}`}
						>
							<i>
								{statArrow == "up" ? (
									<BsArrowUpRight />
								) : (
									<BsArrowDownLeft />
								)}
							</i>{" "}
							{statPercent}%
						</span>
						<span className="whitespace-nowrap">
							{statDescripiron}
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

CardStats.defaultProps = {
	statSubtitle: "Donate Blood",
	statTitle: "000,030",
	statArrow: "up",
	statPercent: "3.48",
	statPercentColor: "text-emerald-500",
	statDescripiron: "Since last month",
	statIconName: "far fa-chart-bar",
	statIconColor: "bg-red-500",
};

// CardStats.propTypes = {
//   statSubtitle: PropTypes.string,
//   statTitle: PropTypes.string,
//   statArrow: PropTypes.oneOf(["up", "down"]),
//   statPercent: PropTypes.string,
//   // can be any of the text color utilities
//   // from tailwindcss
//   statPercentColor: PropTypes.string,
//   statDescripiron: PropTypes.string,
//   statIconName: PropTypes.string,
//   // can be any of the background color utilities
//   // from tailwindcss
//   statIconColor: PropTypes.string,
// };
