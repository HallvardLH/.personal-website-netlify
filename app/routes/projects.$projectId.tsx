import { useParams, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getProjects } from "~/utils/projects.server";

export const loader = async ({ params }: { params: { projectId: string } }) => {
    const projects = await getProjects();
    const project = projects.find((p) => p.id.toString() === params.projectId);

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project }, { headers: { "Cache-Control": "no-store" } });

};

export default function ProjectDetail() {
    const { project } = useLoaderData<typeof loader>();
    const { projectId } = useParams();

    return (
        <div key={projectId}>
            <h1>{project.title}</h1>
            <img src={project.image} alt={project.title} style={{ width: "400px", height: "250px" }} />
            <p>{project.description}</p>
            <p>
                <strong>Technologies: </strong>
                {project.technologies.join(", ")}
            </p>
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
    );
}

