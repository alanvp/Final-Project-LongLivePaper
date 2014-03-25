class ArticlesController < ApplicationController

  def create
    @article = Article.new(params.require(:article).permit(:image))
    if @article.save
      flash[:notice] = "Successfully created article."
      binding.pry
    else
      render :action => 'new'
    end
  end

end
