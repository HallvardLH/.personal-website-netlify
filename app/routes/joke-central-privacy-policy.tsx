import type { MetaFunction } from "@remix-run/node";
import PageContainer from "~/components/layout/pageContainer";
import PrivacyPolicy from "~/components/apps/PrivacyPolicy";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy | Joke Central" },
        { name: "description", content: "Privacy policy for Joke Central" },
    ];
};

export default function JokeCentralPrivacyPolicy() {
    return (
        <PageContainer>
            <PrivacyPolicy
                appName="Joke Central"
                developerName="Whimsical Works"
                effectiveDate="2024-10-30"
                contactEmail="contact@funlibs.app"
            />
        </PageContainer>
    );
}
