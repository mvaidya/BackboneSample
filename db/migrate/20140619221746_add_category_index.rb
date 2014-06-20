class AddCategoryIndex < ActiveRecord::Migration
  def change
    add_index :products, :category, :unique => false
  end
end
