import PageContainer from "~/components/layout/pageContainer";
import MainImage from "~/components/project/mainImage";
import "./Project.css";
import { Project as ProjectType } from "~/utils/ProjectType";
import Logo from "./logo";
import { ReactNode } from "react";

type ProjectProps = {
    project: ProjectType;
    customDescription?: ReactNode;
};

export default function Project({ project, customDescription }: ProjectProps) {
    return (
        <PageContainer>
            <div className="project-grid">
                <div>
                    <h1 className="header">{project.title}</h1>
                    <h2 className="byline">{project.byline}</h2>
                    {customDescription ? (
                        <>
                            {customDescription}
                        </>
                    ) : (
                        <p className="project-description">
                            {project.description.map((section, index) => (
                                <>
                                    <p key={index}>{section}</p>
                                    <br />
                                </>
                            ))}
                        </p>
                    )}
                </div>
                <div className="project-grid-right">
                    <div className="project-technologies">
                        {project.technologies.map((technology, index) => (
                            <Logo key={index} brand={technology} />
                        ))}
                    </div>
                    <MainImage src={project.image} alt={project.title} />
                </div>
            </div>
            <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
                {project.demo && (
                    <>
                        {" | "}
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </>
                )}
            </div>
            <div className="project-gallery">
                {project.gallery && project.gallery.map((src, index) => (
                    <img key={index} style={{ height: "36rem" }} src={src} alt="" />
                ))}
            </div>

        </PageContainer>
    );
}
