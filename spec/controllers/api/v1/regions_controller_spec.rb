require "rails_helper"

RSpec.describe Api::V1::RegionsController, type: :controller do
  let!(:first_region) { Region.create(
    name: "Test Region 1",
    image_url: "https://www.google.com",
  ) }
  let!(:second_region) { Region.create(
    name: "Test Region 2",
    image_url: "https://www.google.com",
  ) }

  let!(:first_flavor) { Flavor.create(
    name: "Chocolatey Goodness",
    description: "It is brown.",
    image_url: "www.chocolate.com",
    region: first_region
  )}

  let!(:second_flavor) { Flavor.create(
    name: "Vanilla Boringness",
    description: "It is white.",
    image_url: "www.vanilla.com",
    region: second_region
  )}

  describe "GET#index" do
    it "should return a list of all the regions" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      
      
      expect(returned_json["regions"][0]["name"]).to eq "Test Region 1"
      expect(returned_json["regions"][0]["image_url"]).to eq "https://www.google.com"
      
      expect(returned_json["regions"].length).to eq 2
      expect(returned_json["regions"][1]["name"]).to eq "Test Region 2"
      expect(returned_json["regions"][1]["image_url"]).to eq "https://www.google.com"
      
    end
  end
  
  describe "GET#show" do
    it "should display all ice cream flavors associated with one region" do
      get :show, params: { id: first_region.id }
      returned_json = JSON.parse(response.body)
      
      expect(response.status).to eq(200)
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq(1)
      expect(returned_json["region"]["flavors"][0]["name"]).to eq("Chocolatey Goodness")
      expect(returned_json["region"]["flavors"][0]["description"]).to eq("It is brown.")
      expect(returned_json["region"]["flavors"][0]["image_url"]).to eq("www.chocolate.com")
    end
  end
end