class Passenger

    attr_accessor :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all 
        @@all 
    end

    # def name
    #     @name
    # end

    # def name=(new_name)
    #     @name = new_name
    # end

    def tickets
        # returns a user's tickets
        Ticket.all.select do |ticket|
            ticket.passenger == self
        end
    end

    def flights
        # all the flights this person has tickets for 
        self.tickets.map do |ticket|
            ticket.flight
        end
    end

    def destinations
        # all the places this person is traveling
        self.flights.map do |flight|
            flight.destination
        end
    end

    def buy_ticket(flight, price)
        Ticket.new(self, flight, price)
    end

end