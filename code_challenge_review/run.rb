require_relative "./flight.rb"
require_relative "./passenger.rb"
require_relative "./ticket.rb"
require 'pry'

emily = Passenger.new("Emily")
puts emily.name == "Emily"

emily.name = "Francine"
puts emily.name == "Francine"

binding.pry