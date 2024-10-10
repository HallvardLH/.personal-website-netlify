import { json } from "@remix-run/node";
import { getProjects } from "~/utils/projects.server";
import { useLoaderData } from "@remix-run/react";
import Project from "~/components/project/Project";
import "../components/project/Project.css";

export const loader = async () => {
    const projects = await getProjects();
    const project = projects.find((p) => p.id.toString() === "fun-libs");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project });

};

export default function ProjectDetail() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <Project
            project={project}
            customDescription={(
                <>
                    <p className="project-description">
                        Fun Libs is perhaps the project that I am the most proud of. Since its release in August of 2023, it has been downloaded over <strong>24 000 times</strong> with hundreds of daily active users (as of October 2024)!
                    </p>
                    <br />
                    <p className="project-description">
                        The app was created in cooperation with <a target="_blank" rel="noopener noreferrer" href="https://github.com/Albretsen">Asgeir Albretsen</a>, and the initial mvp was developed during the summer of 2023. This coinsided with my personal goal of learing a new framework in one summer, which ended up being <strong>React Native</strong>.
                    </p>
                </>
            )}
        />
    );
}



