require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    expect(User.new(email: "test@test.com", username: "test", password: "testing")).to be_valid
  end

  it { should have_valid(:email).when("test@test.com") }
  it { should_not have_valid(:email).when(nil, "") }

  it { should have_valid(:username).when("username1")}
  it { should_not have_valid(:username).when(nil, "") }

  it { should have_valid(:password).when("something") }
  it { should_not have_valid(:password).when(nil, "") }
  it { should_not have_valid(:password).when("test")
end
