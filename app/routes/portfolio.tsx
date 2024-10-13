import PageContainer from "~/components/layout/pageContainer";
import ProjectPreview from "~/components/project/ProjectPreview";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";
import "../components/project/project-preview.css";
import AnimateOnView from "~/components/general/AnimateOnView";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio | Hallvard Hetlelid" },
    ];
};

export default function Projects() {

    const projects = projectsData;

    return (
        <PageContainer maxWidth={false}>
            <h1 className="header portfolio-header max-w-screen-lg m-auto">Portfolio</h1>
            {projects.map((project, index) => (
                <AnimateOnView key={index}>
                    <ProjectPreview project={project} colored={index % 2 === 1} />
                </AnimateOnView>
            ))}
        </PageContainer>
    );
}
