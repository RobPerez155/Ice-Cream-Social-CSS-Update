class FlavorShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url

  belongs_to :region
end