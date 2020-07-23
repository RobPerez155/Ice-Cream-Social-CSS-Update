require "rails_helper"

RSpec.describe Api::V1::FlavorsController, type: :controller do
  let!(:flavor_test_region) { Region.create(
    name: "Flavor Town",
    image_url: "https://www.google.com"
  ) }
  let!(:first_flavor) { Flavor.create(
    name: "Test Flavor 1",
    image_url: "https://www.google.com",
    description: "Tastes like test flavor 1, yummy!",
    region: flavor_test_region
  ) }
  let!(:second_flavor) { Flavor.create(
    name: "Test Flavor 2",
    image_url: "https://www.google.com",
    description: "Tastes like test flavor 2, yummy!",
    region: flavor_test_region
  ) }

  describe "GET#index" do
    it "should return a list of all the flavors" do

      get :index
      returned_json = JSON.parse(response.body)
      # binding.pry

        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")


        expect(returned_json[0]["name"]).to eq "Test Flavor 1"
        expect(returned_json[0]["image_url"]).to eq "https://www.google.com"

        expect(returned_json.length).to eq 2
        expect(returned_json[1]["name"]).to eq "Test Flavor 2"
        expect(returned_json[1]["image_url"]).to eq "https://www.google.com"

    end
  end
end