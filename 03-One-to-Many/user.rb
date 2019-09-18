class User
    attr_reader :username

    def initialize(username)
        @username = username
    end 

    def tweets
        Tweet.all.select{|tweet| 
            tweet.user == self 
        }
    end 

    #message is a string 
    def post_tweet(message)
        Tweet.new(message, self)
    end 
end 