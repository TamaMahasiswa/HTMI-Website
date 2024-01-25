import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.divisi.map((divisi, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={divisi.logo}
						title={divisi.title}
						description={divisi.description}
						linkText={divisi.linkText}
						link={divisi.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
