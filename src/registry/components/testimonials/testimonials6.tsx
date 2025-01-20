import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials6() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl">
          We&apos;re revolutionizing SEO —{" "}
          <span className="text-muted-foreground">
            but don&apos;t take our word for it. See what some of our users have
            to say.
          </span>
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="font-bold">4.8 RATING</span>{" "}
            <span className="text-muted-foreground text-xs ">500+ REVIEWS</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            type: "MARKETING AGENCY",
            quote:
              "This year, my agency wrote 1,975,002 words with Surfer... Content Editor speeds up the process and writers genuinely enjoy using it.",
            author: "Craig Dewart",
            role: "My Content Pal",
            dark: true,
          },
          {
            type: "MARKETING AGENCY",
            quote:
              "We love Surfer so much that if we had to choose one SEO tool to live with forever, it would be Surfer.",
            author: "Lauren Petrullo",
            role: "Founder, Mongoose Media",
            dark: false,
          },
        ].map((testimonial, i) => (
          <Card
            key={i}
            className={`border-none ${
              testimonial.dark
                ? "bg-black text-white"
                : "bg-[#ff4f4f] text-white"
            }`}
          >
            <CardHeader>
              <Badge
                variant="outline"
                className="w-fit text-current border-current"
              >
                {testimonial.type}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-2xl font-medium leading-normal">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={`github.com/mohdfaizan5.png`}
                  />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm opacity-80">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
