class Api::V1::RegionsController < ApplicationController
  def index
    render json: Region.all.order("name"), each_serializer: RegionSerializer
  end

  def show
    render json: Region.find(params[:id]), serializer: RegionShowSerializer
  end
end