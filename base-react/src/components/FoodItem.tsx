import { motion, useInView } from "motion/react";
import { useRef } from "react";

function FoodItem({ emoji }: { emoji: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="emoji"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5 },
      }}
    >
      {emoji}
    </motion.div>
  );
}
export default FoodItem;
