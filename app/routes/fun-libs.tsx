import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Project from "~/components/project/Project";
import "../components/project/Project.css";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Fun Libs | Hallvard Hetlelid" },
    ];
};

export const loader = async () => {
    const project = projectsData.find((p) => p.id === "fun-libs");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project });
};

export default function FunLibs() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <Project
            project={project}
            customDescription={(
                <>
                    <p className="project-description">
                        Fun Libs is perhaps the project that I am the most proud of. Since its release in August of 2023, it has been downloaded over <strong>24,000 times</strong> with hundreds of daily active users (as of October 2024)!
                    </p>
                    <p className="project-description">
                        The app was created in cooperation with <a target="_blank" rel="noopener noreferrer" href="https://github.com/Albretsen">Asgeir Albretsen</a>, and the initial MVP was developed during the summer of 2023. This coincided with my personal goal of learning a new framework in one summer, which ended up being <strong>React Native</strong>.
                    </p>
                    <p className="project-description">
                        Fun Libs has gone through several iterations. The current verison of Fun Libs that is live in the Play Store, is actually version number 4.
                    </p>
                </>
            )}
        />
    );
}

