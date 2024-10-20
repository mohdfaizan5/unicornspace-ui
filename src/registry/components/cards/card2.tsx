import Image from "next/image";
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BioCard() {
  return (
    <div className="bg-zinc-900 text-white p-8 max-w-2xl rounded-lg">
      <Avatar className="mb-6">
        <AvatarImage src="https://github.com/likithanagaraj.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-bold mb-4 leading-tight">
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className="text-zinc-400 mb-6">
        Im Spencer, a software designer and entrepreneur based in New York
        City. Im the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-zinc-400 hover:text-white">
          <Twitter className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-white">
          <Instagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-white">
          <Github className="w-6 h-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="#" className="text-zinc-400 hover:text-white">
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
