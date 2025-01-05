import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, DollarSign, ShieldCheck } from "lucide-react";

export default function HeroSection5() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24 ">
      <div className="text-center space-y-6 mb-16">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Badge variant="outline" className="rounded-full">
            New
          </Badge>
          <span className="text-sm inline-flex items-center">
            We&apos;ve made our pricing public
            <ArrowRight className="w-4 h-4 ml-1" />
          </span>
        </div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight">
          Calm websites
          <br />
          for fast startups
        </h2>
        <p className="text-xl text-muted-foreground">
          We build easy to manage marketing websites for
          <br />
          early-stage startups ready to grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className=" rounded-full h-12">
            Get a free quote
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-12">
            Book an intro call
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {[
          {
            icon: Clock,
            text: "4-6 week delivery",
          },
          {
            icon: DollarSign,
            text: "Transparent pricing",
          },
          {
            icon: ShieldCheck,
            text: "100% money-back ",
          },
        ].map((feature, i) => (
          <div key={i} className="flex items-center gap-3 justify-center">
            <div className="p-2 rounded-full  shadow-sm">
              <feature.icon className="w-5 h-5" />
            </div>
            <span className="font-medium">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
