import { motion } from "framer-motion";

export default function AnimateOnView({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.15 }}
        >
            {children}
        </motion.div>
    )
}