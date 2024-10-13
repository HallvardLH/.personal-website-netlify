import "./Project.css";
import "./project-preview.css";
import { Project } from "~/utils/ProjectType";
import Logo from "./logo";
import { Link } from "@remix-run/react";

type ProjectProps = {
    project: Project;
    colored?: boolean;
};

export default function ProjectPreview({ project, colored }: ProjectProps) {
    return (
        <div className={`preview-card ${colored ? "preview-card-colored" : null}`}>
            <div className="project-grid project-grid-left preview-grid max-w-screen-lg m-auto">
                <div>
                    <h1 className={`preview-header ${colored ? "preview-header-colored" : null}`}>{project.title}</h1>
                    <h2 className="byline preview-byline">{project.byline}</h2>
                    <div className="project-description">
                        <p>{project.description[0]}</p>
                        <br />
                        <p>{project.description[1]}</p>
                    </div>
                    <div className="preview-bottom">
                        <Link to={`/${project.id}`}>
                            <button className={`button ${colored ? "button-colored" : null}`}>Read more</button>
                        </Link>
                        <div className="project-technologies preview-technologies">
                            {project.technologies.map((technology, index) => (
                                <Logo key={index} brand={technology} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="project-grid-right">
                    <img className="preview-image" src={project.image} alt={project.title} />
                </div>
            </div>
        </div>
    )
}