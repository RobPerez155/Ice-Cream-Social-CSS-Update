class AddReviewTable < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :overall, null: false
      t.integer :sweetness, null: false
      t.integer :mouth_feel, null: false
      t.integer :taste, null: false
      t.string :comment
      t.string :manufacturer, null: false
      t.belongs_to :flavor
      t.belongs_to :user

      t.timestamps
    end 
  end
end
