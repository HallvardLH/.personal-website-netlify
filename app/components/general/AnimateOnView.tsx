import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimateOnViewProps {
    children: React.ReactNode,
    amount?: number,
}

export default function AnimateOnView({ children, amount }: AnimateOnViewProps) {
    const [viewportAmount, setViewportAmount] = useState(0.1);

    // Determine motion animation amount based on screen with, eg. is it a phone? Then lower the threshold
    useEffect(() => {
        const updateViewportAmount = () => {
            setViewportAmount(window.innerWidth > 700 ? 0.1 : 0.02);
        };

        updateViewportAmount();
        // Update on resize
        window.addEventListener("resize", updateViewportAmount);

        return () => window.removeEventListener("resize", updateViewportAmount);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: amount ? amount : viewportAmount }}
        >
            {children}
        </motion.div>
    )
}