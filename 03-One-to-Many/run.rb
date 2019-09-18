require_relative "./user.rb"
require_relative "./tweet.rb"
require "pry"

puts "Welcome To Twitter"
coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("I'm drinking coffee", coffee_dad)
tweet3 = Tweet.new("I love tea", tea_uncle)

puts "Test creation of User"
puts coffee_dad.class == User

puts "Test create of Tweets"
puts tweet1.class == Tweet

puts "Test that Tweet can return message"
puts tweet1.message == "I love coffee"

puts "Test that Tweet can return its user"
puts tweet2.user == coffee_dad
puts tweet3.user == tea_uncle

puts "Get all tweets"
puts Tweet.all.include?(tweet1)
puts Tweet.all.include?(tweet2)
puts Tweet.all.include?(tweet3)

puts "Get username of user's tweet"
puts tweet1.username == "Coffee Dad"
puts tweet3.username == "Tea Uncle"

puts "Get all tweets for a user"
puts tea_uncle.tweets #inside tweets self is tea_uncle
puts coffee_dad.tweets #inside tweets self is coffee_dad
#should be an array that contains tweet1 and tweet2

puts "User can create tweet"
tweet4 = coffee_dad.post_tweet("love is gone")
puts coffee_dad.tweets.include?(tweet4)

binding.pry