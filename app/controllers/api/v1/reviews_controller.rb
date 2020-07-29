class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
  def new
  end

  def create
    review = Review.new(review_params)
    review.user_id = current_user.id
    review.username = current_user.username
    if review.valid?
      review.save 
      notice = "Review submitted successfully!"
      render json: { reviewData: review, noticeString: notice }
    else
      reviewErrors = "Error: " + review.errors.full_messages.to_sentence
      render json: { noticeString: reviewErrors }
    end
  end

  def review_params
    params.require(:review).permit([:overall, :sweetness, :mouth_feel, :taste, :comment, :manufacturer, :flavor_id, :user_id])
  end
end
