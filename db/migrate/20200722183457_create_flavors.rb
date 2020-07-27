class CreateFlavors < ActiveRecord::Migration[5.2]
  def change
    create_table :flavors do |t|
      t.string :name, null: false
      t.string :description
      t.string :image_url, null: false

      t.timestamps null: false 

      t.belongs_to :region, null: false
    end
  end
end
