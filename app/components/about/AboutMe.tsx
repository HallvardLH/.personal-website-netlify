import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import "./about-me.css";
import BigCookie from "./BigCookie";

function AnimateOnView({ children }: { children: ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.25 }}
        >
            {children}
        </motion.div>
    )
}

export default function AboutMe() {
    return (
        <div>
            <h1 className="header">About me</h1>
            <AnimateOnView>
                <h2 className="subheader">Programming</h2>
                <p className="normal-text about-me-section">
                    I starting programming some time around the end of 2018 and since then, programming has been my biggest hobby. I try to always have some project going, something to work on whenever I have the time.
                </p>
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
                        <BigCookie />
                        <img style={{ objectFit: "cover" }} src="/project-images/emoji-tycoon-0-feature.png" alt="A phone running Emoji Tycoon" />
                    </div>
                </div>
            </AnimateOnView>
        </div >
    )
}