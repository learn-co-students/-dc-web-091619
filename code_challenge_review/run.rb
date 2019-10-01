require_relative "./flight.rb"
require_relative "./passenger.rb"
require_relative "./ticket.rb"
require 'pry'

emily = Passenger.new("Emily")
christina = Passenger.new("Christina")
charles = Passenger.new("Charles")
aicha = Passenger.new("Aicha")

flight1 = Flight.new("BWI", "LAX", "2:00")
flight2 = Flight.new("DCA", "LGA", "3:00")
flight3 = Flight.new("PHX", "LON", "4:00")

ticket1 = Ticket.new(charles, flight1, 400)
ticket2 = Ticket.new(charles, flight2, 500)
ticket3 = Ticket.new(emily, flight2, 300)

puts ticket1.passenger_name == "Charles"

puts "Ticket knows its destination?"
puts ticket1.flight_destination == "LAX"
binding.pry