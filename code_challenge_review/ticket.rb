class Ticket

    attr_reader :passenger, :flight, :price

    @@all = []

    # build out initialize method
    def initialize(passenger, flight, price)
        @passenger, @flight, @price = passenger, flight, price
        @@all << self
    end

    # build Ticket.all
    def self.all 
        @@all 
    end
    
    def passenger_name
        self.passenger.name
        # Passenger.all.find do |passenger|
        #     passenger == @passenger
        # end
    end

    def flight_destination
        self.flight.destination
    end

    def flight_origin
        self.flight.origin
    end



    # build out method to get Flight object
    # build method to get Passenger object

end