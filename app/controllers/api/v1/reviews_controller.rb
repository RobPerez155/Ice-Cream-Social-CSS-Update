class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create

    if current_user.nil?
      render json: { notice: "Please login before submitting a review." }
    else
      review = Review.new(review_params)
      review.flavor_id = params["flavor_id"]
      review.user_id = current_user.id
      review.username = current_user.username

      if review.valid?
        review.save 
        render json: { reviewData: review, notice: "Review submitted successfully!" }
      else
        render json: { reviewData: review, notice: "Error: #{review.errors.full_messages.to_sentence}" }
      end
    end
  end

  private
  def review_params
    params.require(:review).permit(:overall, :sweetness, :mouth_feel, :taste, :comment, :manufacturer)
  end
end
