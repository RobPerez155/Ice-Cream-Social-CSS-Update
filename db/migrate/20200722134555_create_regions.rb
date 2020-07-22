class CreateRegions < ActiveRecord::Migration[5.2]
  def change
    create_table :regions do |t|
      t.string :name, null: false 
      t.string :image_url, null: false

      t.timestamps null: false
    end
  end
end
