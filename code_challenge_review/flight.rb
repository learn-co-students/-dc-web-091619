class Flight

    attr_accessor :origin, :destination, :time

    @@all = [] # empty array
    @@MODE_OF_TRANSPORTATION = "plane"

    def initialize(origin, destination, time)
        @origin, @destination, @time = origin, destination, time
        # shoves every instance of flight into the array whenever
        # we type .new
        @@all << self 
    end

    def self.all # Flight.all
        @@all 
    end

    def self.mode_of_transportation
        puts @@MODE_OF_TRANSPORTATION
    end 

    def tickets
        Ticket.all.select do |ticket|
            ticket.flight == self
        end
    end

    def passengers
        self.tickets.map do |ticket|
            ticket.passenger
        end
    end


end