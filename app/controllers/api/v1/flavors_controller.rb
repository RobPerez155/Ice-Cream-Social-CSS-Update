class Api::V1::FlavorsController < ApplicationController  
  def show
    @flavor = Flavor.find(params[:id])
    @reviews = @flavor.reviews
    render json: { flavorData: @flavor, reviewsData: @reviews }
  end
end