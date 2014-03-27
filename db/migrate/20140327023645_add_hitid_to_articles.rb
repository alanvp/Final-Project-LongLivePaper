class AddHitidToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :HIT_ID, :string
  end
end
