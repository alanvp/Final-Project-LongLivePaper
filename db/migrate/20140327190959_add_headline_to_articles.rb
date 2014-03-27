class AddHeadlineToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :headline, :string
  end
end
