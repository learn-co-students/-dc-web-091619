class Tweet 
    attr_reader :message, :user

    @@all_tweets = []
    #message is a string is the content of the tweet
    #user is an instance of the User class
    def initialize(tweet_message, twitter_user)
        @message = tweet_message
        @user = twitter_user
        @@all_tweets << self
    end 

    def self.all 
        @@all_tweets
    end 

    #returns the username of the user instance
    def username 
        self.user.username
    end 
end