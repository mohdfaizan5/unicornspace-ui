import { Button } from "@/components/ui/button"
import { Share2, Link, MessageSquare, Users, FileText } from 'lucide-react'

export function NotesSharing() {
  const integrations = [
    { name: "Public link", icon: Link, position: "left-1/4 -top-12" },
    { name: "#user-feedback", icon: MessageSquare, position: "left-0 top-1/4" },
    { name: "Email / All participants", icon: Users, position: "left-1/4 bottom-0" },
    { name: "CRM", icon: FileText, position: "right-1/4 -top-12" },
    { name: "Project updates", icon: Share2, position: "right-0 -top-1/2" },
    { name: "1 on 1 notes", icon: Users, position: "right-1/4 bottom-0" },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="text-center space-y-6 mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Share your notes with one click
        </h2>
        <p className="text-xl text-zinc-600">
          Makes it easy to share notes on the platforms you already use
        </p>
      </div>

      <div className="relative h-[400px] max-w-2xl mx-auto">
        <Button 
          size="lg" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#006D3F] hover:bg-[#005732] text-white rounded-full h-12"
        >
          Share notes
        </Button>
        
        {integrations.map((integration, i) => (
          <div
            key={i}
            className={`absolute ${integration.position} bg-white shadow-lg rounded-full py-2 px-4 flex items-center gap-2 text-sm`}
          >
            <integration.icon className="w-4 h-4" />
            <span className="font-medium">{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

