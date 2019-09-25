class TweetsApp
  # This class acts as our frontend,
  # its only job is to interact with the user via input and output;
  # it doesn't speak directly to the database

  def start
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp

    puts 'Enter a message:'
    message = gets.chomp

    # Making calls to our Tweet model -
    # that's what talks to the database for us
    # and performs the appropriate CRUD action
    tweet = Tweet.new({'username' => username, 'message' => message})
    tweet.save
    # binding.pry
    tweets = Tweet.all
    self.render(tweets)
  end


  def render(tweets_array)
    tweets_array.each.with_index(0) do |tweet, i|
      puts "#{i+1}. #{tweet.username} says: #{tweet.message}"
    end
  end
end
