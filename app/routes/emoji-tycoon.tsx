import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Project from "~/components/project/Project";
import projectsData from "~/data/projects.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Emoji Tycoon | Hallvard Hetlelid" },
    ];
};

export const loader = async () => {
    const project = projectsData.find((p) => p.id === "emoji-tycoon");

    if (!project) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ project });
};

export default function EmojiTycoon() {
    const { project } = useLoaderData<typeof loader>();
    return (
        <Project project={project}
            customDescription={(
                <>
                    <p className="project-description">
                        Emoji Tycoon is one of my current projects: a mobile game in which the objective is to get as many emojis as possible. This is initially done through tapping one big emoji, which in turn allows for unlocking buildings that create emojis for you, such as drawing hands, art studios, farms etc. It is heavily inspired by <a target="_blank" rel="noopener noreferrer" href="https://orteil.dashnet.org/cookieclicker/">Cookie Clicker</a>.
                    </p>
                    <p className="project-description">
                        My love for Cookie Clicker is in fact the reason why I decided to create Emoji Tycoon in the first place. I remember the first time playing Cookie Clicker in 2016, I had never played something that felt so... good before. Seeing the numbers go up and up at an exponential rate was just so satisfying. I wanted not only to play such a game, but create on as well.
                    </p>
                    <p className="project-description">
                        The main design idea behind Emoji Tycoon is sort of a self-imposed challenge: create a game using only emojis as illustrations. I thought it would be an interesting idea to work with such a limited palette for several reasons, chiefly because I&apos;m just not great at drawing, and this would mean not having to worry about that part at all. Secondly, it gives the game a theme from the get-go, a good starting point for churning out emoji-producing-buildings.
                    </p>
                </>
            )}
        />
    );
}

