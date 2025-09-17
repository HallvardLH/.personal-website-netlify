import ProfilePicture from "./ProfilePicture";
import "./hero.css";

export default function ProfileHero() {
    return (
        <div className="hero-outer-container">
            <ProfilePicture />
            <div>
                <p className="hero-header">
                    Hallvard Hetlelid
                </p>
                <p className="hero-byline">
                    Software developer
                </p>
                <p className="hero-description">
                    Programming has been my hobby for about half a decade, and it has been immensely rewarding. There is nothing that feels better than knowing <strong>you built something with just your fingers on a keyboard.</strong>
                </p>
                <br />
                <p className="hero-description">
                    I&apos;ll use this site as a means of documenting all my projects, and giving background on the development process behind all of them.
                </p>
            </div>
        </div>
    )
}
