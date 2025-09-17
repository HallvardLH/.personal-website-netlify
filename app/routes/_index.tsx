import type { MetaFunction } from "@remix-run/node";
import PageContainer from "~/components/layout/pageContainer";
import Hero from "~/components/home/Hero";
import AnimateOnView from "~/components/general/AnimateOnView";
import ProjectPreview from "~/components/project/ProjectPreview";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import projectsData from "~/data/projects.json";

export const meta: MetaFunction = () => {
    return [
        { title: "Hallvard Hetlelid | Software developer" },
        { name: "description", content: "Front page" },
    ];
};

export const loader = async () => {
    const project = projectsData.find((p) => p.id === "fun-libs");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }

    return json({ project });
};

export default function Index() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <PageContainer>
            <AnimateOnView>
                <Hero />
            </AnimateOnView>
            <AnimateOnView>
                <ProjectPreview project={project} />
            </AnimateOnView>
        </PageContainer>
    );
}