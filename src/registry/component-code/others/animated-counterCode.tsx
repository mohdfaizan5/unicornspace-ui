export const AnimatedCounterCode = '"use client";\r\nimport {\r\n  animate,\r\n  KeyframeOptions,\r\n  useInView,\r\n  useIsomorphicLayoutEffect,\r\n} from "framer-motion";\r\nimport { useRef } from "react";\r\n\r\ntype AnimatedOptionsProps = {\r\n  from: number;\r\n  to: number;\r\n  animatedOptions?: KeyframeOptions;\r\n};\r\n\r\nconst AnimatedCounter = ({\r\n  from,\r\n  to,\r\n  animatedOptions,\r\n}: AnimatedOptionsProps) => {\r\n  const ref = useRef<HTMLSpanElement>(null);\r\n\r\n  // for animating only in view port and once\r\n  const inView = useInView(ref as React.RefObject<Element>, { once: true });\r\n\r\n  useIsomorphicLayoutEffect(() => {\r\n    const element = ref.current;\r\n    if (!element) return;\r\n    if (!inView) return;\r\n\r\n    element.textContent = String(from);\r\n    const controls = animate(from, to, {\r\n      duration: 1.5,\r\n      ease: "easeOut",\r\n      ...animatedOptions,\r\n      onUpdate(value) {\r\n        // console.log(value, value)\r\n        element.textContent = value.toFixed(0);\r\n      },\r\n    });\r\n    return () => {\r\n      controls.stop();\r\n    };\r\n  }, [ref, inView, from, to]);\r\n  return <span ref={ref} />;\r\n};\r\n\r\nexport default AnimatedCounter;\r\n';
