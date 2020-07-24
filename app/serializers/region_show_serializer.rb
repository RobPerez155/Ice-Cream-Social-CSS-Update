class RegionShowSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :flavors
end
