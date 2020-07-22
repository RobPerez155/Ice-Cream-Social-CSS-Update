class HomesController < ApplicationController
  def index
    @regions = Region.all
  end
end
