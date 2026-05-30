import React from "react";
import { Routes, Route } from "react-router-dom"; 
import MyResume from "../myresume/MyResume";
import HomePage from "../HomePage/HomePage";

const MainPageRouting = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/resume" element={<MyResume />} />
			<Route path="*" element={<HomePage />} />
		</Routes>
	);
};

export default MainPageRouting;
