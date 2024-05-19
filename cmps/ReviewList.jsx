import { ReviewPreview } from './ReviewPreview.jsx'

export function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map(review =>
        <ReviewPreview
          key={review.id}
          review={review}
        // onRemoveReview={onRemoveReview}
        />
      )}</div>
  )
}