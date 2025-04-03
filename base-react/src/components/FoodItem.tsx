import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useRef, useEffect } from "react";

function FoodItem({ emoji }: { emoji: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Motion values
  const opacity = useMotionValue(0);
  const scale = useMotionValue(0);

  // Spring animations
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 10 });
  const springScale = useSpring(scale, { stiffness: 200, damping: 10 });

  useEffect(() => {
    if (isInView) {
      opacity.set(1);
      scale.set(1);
    }
  }, [isInView, opacity, scale]);

  return (
    <motion.div
      ref={ref}
      className="emoji"
      style={{ opacity: springOpacity, scale: springScale }}
    >
      {emoji}
    </motion.div>
  );
}

export default FoodItem;
