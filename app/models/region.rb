class Region < ApplicationRecord
    validates :name, presence: true
    validates :image_url, presence: true
end