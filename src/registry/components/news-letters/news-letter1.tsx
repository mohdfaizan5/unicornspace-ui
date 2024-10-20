"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsLetter1() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your server
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-md">
        <h2 className="text-3xl font-bold mb-4">Thanks for subscribing.</h2>
        <p className="text-zinc-400">
          I'll send you an email any time I publish a new blog post, release a
          new project, or have anything interesting to share that I think you'd
          want to hear about. You can unsubscribe at any time, no hard feelings.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg max-w-md">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">Stay up to date</h2>
      </div>
      <p className="text-zinc-400 mb-4">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="as.@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-zinc-800 border-zinc-700 text-white placeholder-zinc-500"
        />
        <Button type="submit" variant="secondary">
          Join
        </Button>
      </form>
    </div>
  );
}
