class Flavor < ApplicationRecord
    validates :name, presence: true
    validates :image_url, presence: true

    belongs_to :region
    has_many :reviews
end