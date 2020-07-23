class Api::V1::FlavorsController < ApplicationController
  def index
      render json: Flavor.all
  end
end