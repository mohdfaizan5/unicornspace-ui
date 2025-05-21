"use client";
import mermaid from "mermaid";
import { useEffect } from "react";

const MermaidDiagram = ({ code }: { code: string }) => {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    mermaid.contentLoaded();
  }, [code]);
  return (
    <div
      className="mermaid flex flex-col items-center mx-auto"
      suppressHydrationWarning
    >
      {`---
config:
  look: classic
  theme: neo
  layout: dagre
---
${code}`}
      {/* classDef notExposed fill:#fff0,stroke:#000,stroke-width:1px,border-radius:20px;
class B,C,D notExposed;
classDef notResearched fill:#40E0D0,stroke:#333,stroke-width:2px;
class F,J notResearched; */}
    </div>
  );
};

export default MermaidDiagram;
