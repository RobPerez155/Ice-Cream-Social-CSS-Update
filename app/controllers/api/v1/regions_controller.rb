class Api::V1::RegionsController < ApplicationController
  def index
    render json: Region.all
  end

  def show
    # binding.pry
    @region = Region.find(params[:id])
    # @region = Region.find_by({name: params[:region_id]})
    @flavors = @region.flavors
    render json: @flavors
  end
end