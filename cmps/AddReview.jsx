const { useState } = React

export function AddReview({ onToggleReviewModal }) {





  return (
    <section className='review-add'>
      <div className='review-modal'>
        <h1>Add review</h1>
        <button className='btn-toggle-modal' onClick={onToggleReviewModal}>x</button>
      </div>
    </section>
  )
}