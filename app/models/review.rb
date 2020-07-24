class Review < ApplicationRecord
    validates :comment, length: { maximum: 500 }
    validates :manufacturer, length: { maximum: 100 }

    belongs_to :user
    belongs_to :flavor
end