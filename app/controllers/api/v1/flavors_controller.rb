class Api::V1::FlavorsController < ApplicationController
  def index
  end
  
  def show
    # binding.pry
    @region = Region.find(params[:region_id])
    @flavor = Flavor.find(params[:id])
    render json: @flavor
    # @flavor = Region.find(params[:id])
    # @flavors = @region.flavors
    # render json: @flavors.order('name')
  end
end