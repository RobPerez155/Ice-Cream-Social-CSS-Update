require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

  let!(:test_region) { Region.create(
    name: "Test Region 1",
    image_url: "https://www.google.com",
  )}

  let!(:test_flavor) { Flavor.create(
    name: "Chocolatey Goodness",
    description: "It is brown.",
    image_url: "www.chocolate.com",
    region: test_region
  )}

  let!(:test_user) { User.create(
    username: "Bob",
    email: "bob@robert.com",
    password: "something"
  )}

  describe "POST#create" do

    let!(:good_review) {
      { 
        flavor_id: test_flavor.id,
        review: {
          overall: 3,
          sweetness: 3,
          mouth_feel: 3,
          taste: 3,
          comment: "Meh.",
          manufacturer: "Not worth saying."
        }
      }
    }

    it "should not persist if the user is not authenticated" do
      count = Review.count

      post :create, params: good_review
      returned_json = JSON.parse(response.body)

      expect(Review.count).to eq(count)
      expect(returned_json["notice"]).to eq("Please login before submitting a review.")
    end

    it "should persist if the review is valid" do
      count = Review.count

      sign_in test_user
      post :create, params: good_review
      returned_json = JSON.parse(response.body)

      expect(Review.count).to eq(count + 1)
      expect(returned_json["notice"]).to eq("Review submitted successfully!")
    end

    let!(:bad_review) {
      {
        flavor_id: test_flavor.id,
        review: {
          overall: 5,
          sweetness: 3,
          mouth_feel: 4,
          taste: 5,
          comment: "",
          manufacturer: ""
        }
      }
    }

    it "should not persist if the review is not valid" do
      count = Review.count

      sign_in test_user
      post :create, params: bad_review
      returned_json = JSON.parse(response.body)

      expect(Review.count).to eq(count)
      expect(returned_json["notice"]).to eq("Error: Manufacturer can't be blank")
    end
  end
end