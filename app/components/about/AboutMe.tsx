import { Link } from "@remix-run/react";
import "./about-me.css";
import BigCookie from "./BigCookie";
import AnimateOnView from "../general/AnimateOnView";
import ImageWithCaption from "../general/imageWithCaption/ImageWithCaption";
import ProfilePicture from "../home/ProfilePicture";
import { useMemo } from "react";

export default function AboutMe() {
    const age = useMemo(() => {
        const birthDate = new Date('2001-06-27');
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthdayThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

        if (!hasHadBirthdayThisYear) years--;

        return years;
    }, []);
    return (
        <div>
            <h1 className="header">About me</h1>
            <AnimateOnView>
                <div className="about-me-image-section">
                    <div>
                        <h2 className="subheader">Intro</h2>
                        <p className="normal-text about-me-section">
                            My name is Hallvard Lygre Hetlelid, and I&apos;m a {age}-year-old software developer from Bergen. I started programming in late 2018, and what began as a hobby quickly became a passion I plan to carry for life.
                        </p>
                        <p className="normal-text about-me-section">
                            I have two bachelor&apos;s degrees from the University of Bergen: one in <a target="_blank" rel="noopener noreferrer" href="https://www.uib.no/studier/BASV-INFO">Information Science</a> and one in <a target="_blank" rel="noopener noreferrer" href="https://www.uib.no/studier/BASV-MIX">Media- and Interaction Design</a>. Information Science fed my love for programming and understanding how technology works, while Interaction Design taught me to think creatively and put people at the center of what I make. Together, they&apos;ve shaped me into a developer who cares about both building things that work and making them easy and enjoyable to use.
                        </p>
                    </div>
                    <div className="about-me-profile-picture">
                        <ImageWithCaption caption="">
                            <ProfilePicture src="/me.jpg" />
                        </ImageWithCaption>

                    </div>
                </div>
            </AnimateOnView>
            <AnimateOnView>
                <div className="about-me-image-section">
                    <div>
                        <h2 className="subheader">How it started</h2>
                        <p className="normal-text about-me-section">
                            Since 2015, back in secondary school, I&apos;ve been a huge fan of the incremental game <a target="_blank" rel="noopener noreferrer" href="https://orteil.dashnet.org/cookieclicker/">Cookie Clicker</a>. There&apos;s something uniquely satisfying about watching numbers climb higher and higher. I realized I wanted to make my own incremental game, but I knew nothing about programming. I didn&apos;t know any programming, but I was determined to figure it out. With some questionable JavaScript and some shotty CSS, a prototype for a game called <Link to="/tree-cutter">Tree Cutter</Link> was born.
                        </p>

                        <p className="normal-text about-me-section">
                            In 2018, I dove fully into developing Tree Cutter. I spent countless hours experimenting with CSS tricks, learning how to generate HTML programmatically with JavaScript, and Googling everything I didn&apos;t understand.
                        </p>
                        <p className="normal-text about-me-section">
                            I never did finish Tree Cutter, but making it was a turning point. It showed me that the best way to learn coding isn&apos;t through books or tutorials. It&apos;s by <b>building</b> things. The only true way to become a programmer is to set a goal and then figure out whatever it takes to achieve it.
                        </p>
                        <p className="normal-text about-me-section">
                            My passion for incremental games never faded. Six years later, I&apos;m working on a new project: <Link to="/emoji-tycoon">Emoji Tycoon</Link>. This time, with the experience I&apos;ve gained, I&apos;m aiming to build a fully-realized mobile game, complete with a robust front-end and back-end.
                        </p>
                    </div>
                    <div>
                        <ImageWithCaption caption="The titular cookie from Cookie Clicker. Go on, give it a click.">
                            <BigCookie />
                        </ImageWithCaption>
                        <ImageWithCaption caption="My current project, Emoji Tycoon, inspired by Cookie Clicker.">
                            <img style={{ objectFit: "cover" }} src="/project-images/emoji-tycoon-0-feature.png" alt="A phone running Emoji Tycoon" />
                        </ImageWithCaption>
                    </div>
                </div>
            </AnimateOnView>
            <AnimateOnView>
                <div className="about-me-image-section">
                    <div>
                        <h2 className="subheader">My plants</h2>
                        <p className="normal-text about-me-section">
                            Though my biggest hobby is programming, I also have a deep love for plants. Since moving into my own apartment, it has been steadily filled with more and more plants. My favorites are succulents, not only because they are low maintenance, also because they are simply very beautiful plants.
                        </p>
                    </div>
                    <ImageWithCaption caption="One of my many plants, and perhaps my favorite, the jade plant (crassula ovata)!">
                        <img style={{ objectFit: "cover" }} src="/jade-plant.png" alt="My crassula ovata (jade plant)" />
                    </ImageWithCaption>
                </div>
            </AnimateOnView>
        </div >
    )
}