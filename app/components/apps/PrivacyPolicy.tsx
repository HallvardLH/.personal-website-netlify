interface PrivacyPolicyProps {
    appName: string;
    developerName: string;
    effectiveDate: string;
    contactEmail: string;
    title?: string;
}

export default function PrivacyPolicy(props: PrivacyPolicyProps) {
    const { appName, developerName, effectiveDate, contactEmail, title = "Privacy Policy" } = props;
    const sectionStyle = { marginBottom: "1.5em" };
    const titleStyle = { fontSize: "2em", marginBottom: "1em" };
    const subtitleStyle = { fontSize: "1.25em", fontWeight: "bold", margin: "1em 0" };

    return (
        <div>
            <h1 style={titleStyle}>{title}</h1>

            <p style={sectionStyle}>
                This privacy policy is applicable to the {appName} app (hereinafter referred to as
                &quot;Application&quot;) for mobile devices, which was developed by {developerName} (hereinafter
                referred to as &quot;Service Provider&quot;) as an Ad Supported service. This service is provided
                &quot;AS IS&quot;.
            </p>

            <h2 style={subtitleStyle}>What information does the Application obtain and how is it used?</h2>

            <h3>User Provided Information</h3>
            <p style={sectionStyle}>
                The Application acquires the information you supply when you download and register the Application.
                Registration with the Service Provider is not mandatory. However, bear in mind that you might not be
                able to utilize some of the features offered by the Application unless you register with them.
            </p>
            <p style={sectionStyle}>
                The Service Provider may also use the information you provided them to contact you from time to time
                to provide you with important information, required notices, and marketing promotions.
            </p>

            <h3>Automatically Collected Information</h3>
            <p style={sectionStyle}>
                The Application may collect certain information automatically, including, but not limited to, the type
                of mobile device you use, your mobile device&apos;s unique device ID, IP address, mobile operating
                system, Internet browsers used, and usage information.
            </p>

            <h2 style={subtitleStyle}>Does the Application collect precise real-time location information?</h2>
            <p style={sectionStyle}>This Application does not gather precise information about the location of your mobile device.</p>

            <h2 style={subtitleStyle}>Do third parties see and/or have access to information obtained by the Application?</h2>
            <p style={sectionStyle}>
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service
                Provider in improving the Application and their service.
            </p>
            <p style={sectionStyle}>The Application utilizes third-party services that have their own privacy policies:</p>
            <ul style={{ paddingLeft: "1.5em" }}>
                <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a></li>
                <li><a href="https://expo.io/privacy" target="_blank" rel="noopener noreferrer">Expo</a></li>
            </ul>

            <h2 style={subtitleStyle}>What are my opt-out rights?</h2>
            <p style={sectionStyle}>
                You can halt all collection of information by the Application by uninstalling it via the standard uninstall
                processes available on your device or marketplace.
            </p>

            <h2 style={subtitleStyle}>Data Retention Policy, Managing Your Information</h2>
            <p style={sectionStyle}>
                The Service Provider will retain User Provided data for as long as you use the Application and for a
                reasonable time thereafter.
            </p>
            <p style={sectionStyle}>
                If you&apos;d like to delete User Provided Data, please contact the Service Provider at {contactEmail}.
            </p>

            <h2 style={subtitleStyle}>Children</h2>
            <p style={sectionStyle}>
                The Application does not address anyone under the age of 13. If the Service Provider becomes aware of
                personal information collected from a child under 13, they will delete it promptly.
            </p>

            <h2 style={subtitleStyle}>Security</h2>
            <p style={sectionStyle}>
                The Service Provider is committed to safeguarding the confidentiality of your information with physical,
                electronic, and procedural safeguards.
            </p>

            <h2 style={subtitleStyle}>Changes</h2>
            <p style={sectionStyle}>
                This Privacy Policy may be updated periodically. You are advised to review this page for any changes.
            </p>

            <p style={sectionStyle}>This privacy policy is effective as of {effectiveDate}.</p>

            <h2 style={subtitleStyle}>Your Consent</h2>
            <p style={sectionStyle}>
                By using the Application, you consent to the Service Provider processing your information as described
                in this Privacy Policy.
            </p>

            <h2 style={subtitleStyle}>Contact us</h2>
            <p>If you have any questions, contact the Service Provider at {contactEmail}.</p>
        </div>
    );
}
