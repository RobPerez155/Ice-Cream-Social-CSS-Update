class Api::V1::RegionsController < ApplicationController
  def index
    render json: Region.all.order('name')
  end

  def show
    @region = Region.find(params[:id])
    @flavors = @region.flavors
    render json: @flavors.order('name')
  end
end