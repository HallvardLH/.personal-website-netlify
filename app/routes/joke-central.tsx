import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Project from "~/components/project/Project";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Joke Central | Hallvard Hetlelid" },
    ];
};

export const loader = async () => {
    const project = projectsData.find((p) => p.id === "joke-central");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project });
};

export default function JokeCentral() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <Project project={project}
        />
    );
}
