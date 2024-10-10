import type { MetaFunction } from "@remix-run/node";
import PageContainer from "~/components/layout/pageContainer";
import AboutMe from "~/components/about/AboutMe";

export const meta: MetaFunction = () => {
    return [
        { title: "About Me | Hallvard Hetlelid" },
        { name: "description", content: "About me" },
    ];
};

export default function Index() {
    return (
        <PageContainer>
            <AboutMe />
        </PageContainer>
    );
}