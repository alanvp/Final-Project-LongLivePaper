class SiteController < ApplicationController

  def index
    @article = Article.new
  end

  def create
#    @url = params[:file].tempfile.path
#  redirect_to create_path 
  end


end
