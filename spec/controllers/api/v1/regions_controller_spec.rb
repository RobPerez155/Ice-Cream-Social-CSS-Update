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

  describe "GET#index" do
    it "should return a list of all the regions" do

      get :index
      returned_json = JSON.parse(response.body)

        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")


        expect(returned_json[0]["name"]).to eq "Test Region 1"
        expect(returned_json[0]["image_url"]).to eq "https://www.google.com"

        expect(returned_json.length).to eq 2
        expect(returned_json[1]["name"]).to eq "Test Region 2"
        expect(returned_json[1]["image_url"]).to eq "https://www.google.com"

    end
  end
end