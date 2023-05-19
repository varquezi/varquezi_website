import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
}

export const FillUp = ({ children, width = "fit-content", delay}: Props) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible":"hidden"}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { bottom: 0 },
          visible: { bottom: "100%" },
        }}
        initial="hidden"
        animate={isInView ? "visible":"hidden"}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "var(--c3)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
