import { motion } from "framer-motion";
import PageContainer from "~/components/layout/pageContainer";
import ProjectPreview from "~/components/project/ProjectPreview";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio | Hallvard Hetlelid" },
    ];
};

export default function Projects() {
    const projects = projectsData;

    return (
        <PageContainer maxWidth={false}>
            <h1 className="header max-w-screen-lg m-auto">Portfolio</h1>
            <ul style={{ marginTop: "6rem" }}>
                {projects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <ProjectPreview project={project} colored={index % 2 === 0} />
                    </motion.li>
                ))}
            </ul>
        </PageContainer>
    );
}
