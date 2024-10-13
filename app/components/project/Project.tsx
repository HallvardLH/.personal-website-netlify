import PageContainer from "~/components/layout/pageContainer";
import MainImage from "~/components/project/mainImage";
import "./Project.css";
import { Project as ProjectType } from "~/utils/ProjectType";
import Logo from "./logo";
import { Fragment, ReactNode } from "react";
import ImageWithCaption from "../general/imageWithCaption/ImageWithCaption";
import LinkButton from "./LinkButton";
import AppStore from "./AppStore";
import PlayStore from "./PlayStore";

type ProjectProps = {
    project: ProjectType;
    customDescription?: ReactNode;
};

export default function Project({ project, customDescription }: ProjectProps) {
    return (
        <PageContainer>
            <div className="project-grid">
                <div className="project-grid-left">
                    <h1 className="header">{project.title}</h1>
                    <h2 className="byline">{project.byline}</h2>
                    {customDescription ? (
                        <>
                            {customDescription}
                        </>
                    ) : (
                        <div className="project-description">
                            {project.description.map((section, index) => (
                                <Fragment key={index}>
                                    <p >{section}</p>
                                    <br />
                                </Fragment>
                            ))}
                        </div>
                    )}
                    <div className="project-links">
                        <LinkButton link={project.github} variant="Github" />
                        {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <button className="button">View on GitHub</button>
                        </a> */}
                        {/* {project.play_store && (
                            <PlayStore link={project.play_store} />
                        )}
                        {project.app_store && (
                            <AppStore link={project.app_store} />
                        )} */}
                        {/* {project.demo && (
                    <>
                        {" | "}
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </>
                )} */}
                    </div>
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
            <div className="project-gallery">
                {project.gallery && project.gallery.map((src, index) => (
                    <ImageWithCaption maxCaptionWidth="280px" key={index} caption={project.gallery_captions ? project.gallery_captions[index] : ""}>
                        <img style={{ height: "36rem" }} src={src} alt="" />
                    </ImageWithCaption>
                ))}
            </div>

        </PageContainer>
    );
}
