import { BrainCircuit } from "lucide-react";

export const coursesRegistry = [
    {
        title: 'GenAI',
        description: `This is a hands-on course where you'll learn to build apps using GenAI APIs with OpenAI, Claude Anthropic. We’ll explore how to use prompts, manage context, build chatbots, and connect LLMs to your own data using tools like LangChain, LangGraph, Mem0, Qdrant, Neo4j, MongoDB. No AI background required — just basic Python and curiosity.`,
        slug: 'genai',
        isPublished: true,
        icon: BrainCircuit,
         // brain        tags: ['GenAI', 'AI', "RAG", "LangChain", "MCP"],
        label: "New",
        thumbnail: "/images/guides/Authjs part 1.png"
    },
    {
        title: 'Prompt Engineering',
        description: 'Deep dive in understanding how changing words change the complete responses and quality of the output',
        slug: 'prompt-engineering',
        isPublished: false,
        tags: [
            'AI', "System Prompts", "Prompting Techniques"
        ]
    },
    {
        title: 'TypeScript',
        description: 'Learn Typescript with fun and example from scratch',
        slug: 'typescript',
        isPublished: false,
        tags: ['android']
    },
]