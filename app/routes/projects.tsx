import { useLoaderData } from "@remix-run/react";
import { getProjects } from "~/utils/projects.server";
import PageContainer from "~/components/layout/pageContainer";
import ProjectPreview from "~/components/project/ProjectPreview";
import { motion } from "framer-motion";

export const loader = async () => {
    const projects = await getProjects();
    return { projects };
};

export default function Projects() {
    const { projects } = useLoaderData<typeof loader>();

    return (
        <PageContainer maxWidth={false}>
            <h1 className="header max-w-screen-lg m-auto">Portfolio</h1>
            <ul className="" style={{ marginTop: "6rem" }}>
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
