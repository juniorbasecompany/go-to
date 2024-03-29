import React from "react";
import classNames from "classnames";
import SectionHeader from "../partials/SectionHeader";
import Image from "../../elements/Image";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	const outerClasses = classNames(
		"features-Timeline section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-Timeline-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const TimelineClasses = classNames();

	const sectionHeader = {
		title: "Timeline of a product",
		paragraph:
			"Here we can see how a product can be traced, from origin to destination.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader
						data={sectionHeader}
						className="center-content"
					/>
					<div className={TimelineClasses}>
						<VerticalTimeline>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								contentArrowStyle={{
									borderRight: "7px solid  rgb(33, 150, 243)",
								}}
								date="01-26-2022 10:23h"
								dateClassName="text-color-primary"
								iconStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								icon={<Image src={require("./globo.svg")} />}
							>
								<h3 className="vertical-timeline-element-title">
									Switzerland Co.
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Production
								</h4>
								<p>This product was produced at Kilchberg.</p>
								<Image src={require("./map1.png")} />
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2010 - 2011"
								iconStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								icon={<Image src={require("./gps.svg")} />}
							>
								<h3 className="vertical-timeline-element-title">
									Trans Merker
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Trasnportation
								</h4>
								<p>
									The product was transported from Norway to
									Estonia over seas.
								</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2008 - 2010"
								iconStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									ABC Stocker
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Stocker
								</h4>
								<p>Stocked the product for 3 days</p>
								<Image src={require("./map2.png")} />
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2006 - 2008"
								iconStyle={{
									background: "rgb(33, 150, 243)",
									color: "#fff",
								}}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Web Designer
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									San Francisco, CA
								</h4>
								<p>User Experience, Visual Design</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="April 2013"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Content Marketing for Web, Mobile and Social
									Media
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Online Course
								</h4>
								<p>Strategy, Social Media</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="November 2012"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Agile Development Scrum Master
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Certification
								</h4>
								<p>
									Creative Direction, User Experience, Visual
									Design
								</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								date="2002 - 2006"
								iconStyle={{
									background: "rgb(233, 30, 99)",
									color: "#fff",
								}}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Bachelor of Science in Interactive Digital
									Media Visual Imaging
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Bachelor Degree
								</h4>
								<p>Creative Direction, Visual Design</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								iconStyle={{
									background: "rgb(16, 204, 82)",
									color: "#fff",
								}}
								// icon={<StarIcon />}
							/>
						</VerticalTimeline>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Timeline;
