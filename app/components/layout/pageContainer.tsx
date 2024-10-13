import { ReactNode } from "react";
import "./pageContainer.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageContainerProps {
    children: ReactNode;
    maxWidth?: boolean;
}

export default function PageContainer(props: PageContainerProps) {
    const { children, maxWidth = true } = props
    return (
        <div className="outer-container">
            <header>
                <Navbar />
            </header>
            <div className={`page-container ${maxWidth ? "max-w-screen-lg" : "max-w-full"} ${maxWidth ? null : "no-margin"}`}>
                {children}
            </div>
            <Footer />
        </div>
    )
}