require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do

  let!(:test_region) { Region.create(
    name: "Test Region 1",
    image_url: "https://www.google.com",
  ) }

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



  # let!(:good_review) { Review.new(
  #   overall: null,
  #   sweetness: null,
  #   mouth_feel: null,
  #   taste: null,
  #   comment: "",
  #   manufacturer: "",
  #   flavor: test_flavor,
  #   user: test_user
  # )}

  describe "POST#create" do
    # it "should persist if the review is valid" do
    # end
    let!(:bad_review) {{ review: {
      overall: 5,
      sweetness: 3,
      mouth_feel: 4,
      taste: 5,
      comment: "",
      manufacturer: "",
      flavor_id: test_flavor.id,
      user_id: test_user.id
    }}}

    it "should not persist if the review is not valid" do
      sign_in test_user
      binding.pry
      post(:create, body: bad_review.to_json, params: {flavor_id: test_flavor.id })
      returned_json = JSON.parse(response.body)
      binding.pry
      expect(returned_json.notice).to eq("Error: Manufacturer can't be blank")
    end
  end
end