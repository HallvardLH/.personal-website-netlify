import { motion } from "framer-motion";

interface AnimateOnViewProps {
    children: React.ReactNode,
    amount?: number,
}

export default function AnimateOnView({ children, amount = 0.15 }: AnimateOnViewProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: amount }}
        >
            {children}
        </motion.div>
    )
}