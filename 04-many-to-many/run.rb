require 'pry'
require_relative './tweet.rb'
require_relative './user.rb'

# Seed Data

aang = User.new("Aang")
zuko = User.new("Zuko")
iroh = User.new("Iroh")

Tweet.new("Learning to code is hard... unless you have friends like these.", aang)
Tweet.new("What does 'self' even mean?", zuko)
Tweet.new("Seek the single source of truth", iroh)

binding.pry




true
