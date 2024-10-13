import type { MetaFunction } from "@remix-run/node";
import PageContainer from "~/components/layout/pageContainer";
import Hero from "~/components/home/Hero";
import AnimateOnView from "~/components/general/AnimateOnView";

export const meta: MetaFunction = () => {
    return [
        { title: "Hallvard Hetlelid | Front-end Developer" },
        { name: "description", content: "Front page" },
    ];
};

export default function Index() {
    return (
        <PageContainer>
            <AnimateOnView>
                <Hero />
            </AnimateOnView>
        </PageContainer>
    );
}