import type { MetaFunction } from "@remix-run/node";
import PageContainer from "~/components/layout/pageContainer";

export const meta: MetaFunction = () => {
    return [
        { title: "Privacy Policy | Joke Central" },
        { name: "description", content: "Privacy policy for Joke Central" },
    ];
};

export default function JokeCentralDeleteMe() {
    const sectionStyle = { marginBottom: "1.5em" };
    const titleStyle = { fontSize: "2em", marginBottom: "1em" };
    // const subtitleStyle = { fontSize: "1.25em", fontWeight: "bold", margin: "1em 0" };

    return (
        <PageContainer>
            <h1 style={titleStyle}>Delete your Joke Central account</h1>

            <p style={sectionStyle}>
                In order to delete your account, you must send an email to <u>contact@funlibs.app</u>.
                <br />
                The mail needs to contain your username.
            </p>


            <p style={sectionStyle}>
                Your account and all your published jokes will be deleted within a day. After deletion, the account cannot be recovered.
            </p>

        </PageContainer>
    );
}
