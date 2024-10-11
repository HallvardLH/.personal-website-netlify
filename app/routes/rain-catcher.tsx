import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Project from "~/components/project/Project";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Rain catcher | Hallvard Hetlelid" },
    ];
};

export const loader = async () => {
    const project = projectsData.find((p) => p.id === "rain-catcher");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project });
};

export default function ProjectDetail() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <Project project={project}
        />
    );
}

