import React from "react";
import { Routes, Route } from "react-router-dom"; 
import MyResume from "../myresume/MyResume";
import HomePage from "../HomePage/HomePage";
import ReactPresentation from "../KnowledgeHub/React/ReactPresentation";
import AngularPresentation from "../KnowledgeHub/Angular/AngularPresentation";

const MainPageRouting = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="resume" element={<MyResume />} />
			<Route path="reactresources" element={<ReactPresentation />} />
			<Route path="angularresources" element={<AngularPresentation />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
};

export default MainPageRouting;
