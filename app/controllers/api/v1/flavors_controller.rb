class Api::V1::FlavorsController < ApplicationController
  def index
  end
  
  def show
    @region = Region.find(params[:region_id])
    @flavor = Flavor.find(params[:id])
    render json: @flavor
  end
end