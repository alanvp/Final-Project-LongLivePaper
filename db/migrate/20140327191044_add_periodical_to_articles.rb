class AddPeriodicalToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :periodical, :string
  end
end
