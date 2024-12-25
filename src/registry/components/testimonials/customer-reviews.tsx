import { Star } from "lucide-react";

interface Review {
  title: string;
  content: string;
  author: string;
}

interface CustomerReviewsProps {
  totalReviews: number;
  reviews: Review[];
}

export default function CustomerReviews() {
  const data = {
    totalReviews: 47281,
    reviews: [
      {
        title: "Best start of the day",
        content:
          "I love this product. I feel like it's a multivitamin that my body is actually absorbing.",
        author: "Rebekah B.",
      },
      {
        title: "My love for AG1",
        content:
          "I appreciate that AG1 is committed to sourcing high-quality ingredients. It gives me peace of mind.",
        author: "Kellie M.",
      },
      {
        title: "Essential vitamin intake",
        content:
          "I took 10 different vitamins before trying AG1. The convenience of drinking what I need in one scoop is working well for my body!",
        author: "Bonnie B.",
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        {data.totalReviews.toLocaleString()} verified 5 star reviews from our
        customers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.reviews.map((review, index) => (
          <div key={index} className="border  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700  p-6 rounded-lg">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-green-500 fill-current" />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="  mb-4">{review.content}</p>
            <p className="font-medium">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
