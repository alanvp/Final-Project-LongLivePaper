class ArticlesController < ApplicationController

  def initialize
    @mturk = Amazon::WebServices::MechanicalTurkRequester.new :Host => :Sandbox
  end
    
  def create
    @article = Article.new(params.require(:article).permit(:image))
    if @article.save
      flash[:notice] = "Successfully created article."
      
      createNewHit(@article)
    else
      render :action => 'new'
    end
  end

  def createNewHit(article)
    
    title = "Write the words from an image and find website"
    desc = "Transcribe the headline shown in an image of an article and find the url of that article."
    keywords = "image, write, transcription, URL"
    numAssignments = 1
    reward = { :Amount => 0, :CurrencyCode => 'USD' }
    assignmentDurationInSeconds = 60 * 60 # 1 hour
    lifetimeInSeconds = 60 * 60 * 6 # 6 hours
    hitLayout = "3ZWZ4MEZJVIMBWFDF5RX4PW7BCQF19"
    hitLayoutParams = {:Name => 'image_url', :Value => article.image_url}
    qualRequirement = {
      :QualificationTypeId => '2ARFPLSP75KLA8M8DH1HTEQVJT3SY6', 
      :Comparator => 'Exists'
    }  

    # begin
    result = @mturk.createHIT( :Title => title,
                    :Description => desc,
                    :MaxAssignments => numAssignments,
                    :Reward => reward,
                    :Keywords => keywords,
                    :HITLayoutId => hitLayout,
                    :HITLayoutParameter => hitLayoutParams,
                    :LifetimeInSeconds => lifetimeInSeconds,
                    :AssignmentDurationInSeconds => assignmentDurationInSeconds,
                    :QualificationRequirement => qualRequirement
                    )
  # rescue Amazon::WebServices::Util::ValidationException => e
    binding.pry
  #  puts e.inspect
  # end
    puts "Created HIT: #{result[:HITId]}"
    puts "Url: #{getHITUrl( result[:HITTypeId] )}"
    binding.pry
  end

  def getHITUrl( hitTypeId )
    if @mturk.host =~ /sandbox/
      "http://workersandbox.mturk.com/mturk/preview?groupId=#{hitTypeId}" # Sandbox Url
    else
      "http://mturk.com/mturk/preview?groupId=#{hitTypeId}" # Production Url
    end
  end



end
