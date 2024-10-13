import { Link } from "@remix-run/react";
import "./about-me.css";
import BigCookie from "./BigCookie";
import AnimateOnView from "../general/AnimateOnView";
import ImageWithCaption from "../general/imageWithCaption/ImageWithCaption";
import ProfilePicture from "../home/ProfilePicture";

export default function AboutMe() {
    return (
        <div>
            <h1 className="header">About me</h1>
            <AnimateOnView>
                <div className="about-me-image-section">
                    <div>
                        <h2 className="subheader">Intro</h2>
                        <p className="normal-text about-me-section">
                            My name is Hallvard Lygre Hetlelid. I am a 23-year-old front-end developer living in Bergen. I starting programming some time around the end of 2018 and since then, programming has been my biggest hobby. I try to always have some project going, something to work on whenever I have the time.
                        </p>
                        <p className="normal-text about-me-section">
                            I am currently in the final year of my bachelor&apos;s degree in <a target="_blank" rel="noopener noreferrer" href="https://www.uib.no/studier/BASV-MIX">Media- and Interaction Design</a> at the University of Bergen. At the same time, I am taking additional courses each semester in order to gain a second bachelor&apos;s in <a target="_blank" rel="noopener noreferrer" href="https://www.uib.no/studier/BASV-INFO">Information Science</a>, which in many ways is more up my alley than Interaction Design.
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
                            Since 2015, back in secondary school, I&apos;ve been a huge fan of the incremental game <a target="_blank" rel="noopener noreferrer" href="https://orteil.dashnet.org/cookieclicker/">Cookie Clicker</a>. There&apos;s something uniquely satisfying about watching numbers climb higher and higher. Before long, I wanted to create my own incremental game—but at the time, I knew nothing about programming. It felt intimidating, almost impossible, like something I&apos;d never be able to do. It took a few years before I finally decided I just had to give it a shot.
                        </p>
                        <p className="normal-text about-me-section">
                            In 2018, I created my very first game: <Link to="/tree-cutter">Tree Cutter</Link>, an incremental game about, well, cutting trees. I poured countless hours into it, constantly experimenting with new CSS tricks, discovering how to generate HTML programmatically with JavaScript, and pretty much Googling everything I didn&apos;t understand. It was a messy, unpolished project, but it taught me so much about programming.
                        </p>
                        <p className="normal-text about-me-section">
                            I never did finish Tree Cutter, but making it was a turning point. It showed me that the best way to learn coding isn&apos;t through books or tutorials—it&apos;s by *building* things. The only true way to become a programmer is to set a goal and then figure out whatever it takes to achieve it.
                        </p>
                        <p className="normal-text about-me-section">
                            My passion for incremental games never faded. Six years later, I&apos;m working on a new project: <Link to="/emoji-tycoon">Emoji Tycoon</Link>. This time, with the experience I&apos;ve gained, I&apos;m aiming to build a fully-realized mobile game, complete with a robust front-end and back-end. I&apos;m planning to publish it by the end of 2024—unless life throws some unexpected curveballs! 😊
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
                            Though my biggest hobby is programming, I also have a deep love for plants. Since moving into my own apartment, it has been steadily filled with more and more plants. My favorite are succulents, not only because they are low maintenance (although that is nice), also because they are simply very beautiful plants.
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