import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const roundedRating = Math.round(rating * 2) / 2
  const fullStars = Math.floor(roundedRating)
  const hasHalfStar = roundedRating % 1 !== 0

  return (
    <div className="flex items-center" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {[...Array(maxRating)].map((_, index) => {
        if (index < fullStars) {
          return <Star key={index} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
        } else if (index === fullStars && hasHalfStar) {
          return <StarHalf key={index} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
        } else {
          return <Star key={index} className="w-5 h-5 text-gray-300" aria-hidden="true" />
        }
      })}
      <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}