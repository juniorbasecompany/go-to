import React from "react";
// import sections
import Hero from "../components/sections/hero/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Timeline from "../components/sections/timeline/Timeline";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

const Home = () => {
	return (
		<>
			<Hero className="illustration-section-01" />
			<FeaturesTiles />
			<FeaturesSplit invertMobile topDivider imageFill />
			<Timeline />
			<Testimonial topDivider />
			<Cta split />
		</>
	);
};

export default Home;
