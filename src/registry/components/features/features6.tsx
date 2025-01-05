import { Card, CardContent } from "@/components/ui/card";
import { Globe, MessageSquare, XCircle } from "lucide-react";

export default function Features6() {
  const features = [
    {
      title: "Unlimited talk",
      subtitle: "and text globally",
      icon: MessageSquare,
    },
    {
      title: `Unlimited\n data`,
      subtitle: "in 150+ Countries",
      icon: Globe,
    },
    {
      title: "Cancel",
      subtitle: "anytime",
      icon: XCircle,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="text-center border-none shadow-none bg-transparent"
          >
            <CardContent className="pt-6">
              <div className="mx-auto rounded-full bg-primary/15 p-4 size-14 flex items-center justify-center shadow-sm mb-6">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">
                <span className="block">{feature.title}</span>

                <span className="">{feature.subtitle}</span>
              </h3>
              <p className="text-2xl font-semibold mb-4"></p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-xs text-zinc-600">
        *Subject to our Play by the Rules policy
      </p>
    </section>
  );
}
