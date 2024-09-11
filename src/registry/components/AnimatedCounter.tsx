"use client";
import {
  animate,
  KeyframeOptions,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedOptionsProps = {
  from: number;
  to: number;
  animatedOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animatedOptions,
}: AnimatedOptionsProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  // for animating only in view port and once
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);
    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animatedOptions,
      onUpdate(value) {
        // console.log(value, value)
        element.textContent = value.toFixed(0);
      },
    });
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);
  return <span ref={ref} />;
};

export default AnimatedCounter;
