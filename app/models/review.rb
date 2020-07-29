class Review < ApplicationRecord
    validates :comment, length: { maximum: 500 }
    validates :manufacturer, length: { maximum: 100 }
    validates :overall, presence: true
    validates :sweetness, presence: true
    validates :mouth_feel, presence: true
    validates :taste, presence: true

    belongs_to :user
    belongs_to :flavor
end