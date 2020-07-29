require "rails_helper"

RSpec.describe Review, type: :model do
  User.new(email: "test@test.com", username: "test", password: "testing")
  it "is valid with valid attributes" do
    expect(Review.new(
      overall: 1, 
      sweetness: 1, 
      mouth_feel: 1, 
      taste: 1, 
      comment: "Testing is fun", 
      manufacturer: "Boston Ice Cream Co." 
      username: ,
      flavor_id: ,
      user_id: )).to be_valid
  end

  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:username).when("username1")}
  it { should_not have_valid(:username).when(nil, "") }

  it { should have_valid(:password).when("something") }
  it { should_not have_valid(:password).when(nil, "") }
  it { should_not have_valid(:password).when("test")}
end


overall: null,
sweetness: null,
mouth_feel: null,
taste: null,
comment: "",
manufacturer: "",
flavor_id: test_flavor,
username: ,
user_id: 

RSpec.describe Api::V1::ReviewsController, type: :controller do

  let!(:test_region) { Region.create(
    name: "Test Region 1",
    image_url: "https://www.google.com",
  ) }

  let!(:test_flavor) { Flavor.create(
    name: "Chocolatey Goodness",
    description: "It is brown.",
    image_url: "www.chocolate.com",
    region: first_region
  )}

  let!(:test_user) { User.create(
    name: "Bob",
    description: "It is brown.",
    image_url: "www.chocolate.com",
    region: first_region
  )}

  let!(:bad_review) { Review.new(
    overall: null,
    sweetness: null,
    mouth_feel: null,
    taste: null,
    comment: "",
    manufacturer: "",
    flavor_id: test_flavor,
    username: ,
    user_id: 
  ) }

  let!(:good_review) { Review.new(
    overall: null,
    sweetness: null,
    mouth_feel: null,
    taste: null,
    comment: "",
    manufacturer: "",
    flavor_id: test_flavor
    user
  )}