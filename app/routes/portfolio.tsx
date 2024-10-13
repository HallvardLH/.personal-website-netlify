import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageContainer from "~/components/layout/pageContainer";
import ProjectPreview from "~/components/project/ProjectPreview";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";
import "../components/project/project-preview.css";

export const meta: MetaFunction = () => {
    return [
        { title: "Portfolio | Hallvard Hetlelid" },
    ];
};

export default function Projects() {
    const [viewportAmount, setViewportAmount] = useState(0.25);

    // Determine motion animation amount based on screen with, eg. is it a phone? Then lower the threshold
    useEffect(() => {
        const updateViewportAmount = () => {
            setViewportAmount(window.innerWidth > 700 ? 0.25 : 0.02);
        };

        updateViewportAmount();
        // Update on resize
        window.addEventListener("resize", updateViewportAmount);

        return () => window.removeEventListener("resize", updateViewportAmount);
    }, []);

    const projects = projectsData;

    return (
        <PageContainer maxWidth={false}>
            <h1 className="header portfolio-header max-w-screen-lg m-auto">Portfolio</h1>
            <ul>
                {projects.map((project, index) => (
                    <motion.li
                        key={project.id}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: viewportAmount }}
                    >
                        <ProjectPreview project={project} colored={index % 2 === 1} />
                    </motion.li>
                ))}
            </ul>
        </PageContainer>
    );
}
