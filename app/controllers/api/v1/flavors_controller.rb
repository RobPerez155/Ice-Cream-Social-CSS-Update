class Api::V1::FlavorsController < ApplicationController  
  def show
    @flavor = Flavor.find(params[:id])
    render json: @flavor
  end
end