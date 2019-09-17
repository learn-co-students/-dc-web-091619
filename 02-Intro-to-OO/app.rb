require "pry"

a = 3
b = 4

x = "hi"
y = "hello world"

# puts x.[](0)     #syntactic vinegar
# puts x[0]        #syntactic sugar

# puts x.length
# puts x.[](0)

# class String 
#     def length 
#         #return the length of the string 
#     end 

#     def [](index)
#         #return the character at the given index
#     end 
# end

# ella = {name: "ELLA", color: "black"}
# garfield = {name: "GARFIELD", color: "orange"}

# puts ella
# puts garfield

name = "ELLA"

class Cat 
    attr_reader :name #syntactic sugar
    attr_writer :ssn
    attr_accessor :color

    @@all_cats = []

    def initialize(name, color, social_num="000-00-0000")
        @name = name
        @color = color
        @ssn = social_num
        @@all_cats << self
    end 
    ##inside an instance method, self is the instance 

    def ssn #customize your getter methods
        @ssn[0..2] + "-XX-XXXX"
    end 

    def meow #self inside an instance method is the instance
        puts "meow! My ssn is #{self.ssn}" #ella.ssn
    end

    def self.get_all_cats #Class method
        @@all_cats
    end 
    

    # def name #getter method
    #     @name
    # end 

    # def color #getter method (syntactic vingenar)
    #     @color
    # end 

    # def color=(new_color) #setter method
    #     @color = new_color
    # end
end 

ella = Cat.new("ELLAH", "black")
garfield = Cat.new("GARFIELD", "orange", "567-56-567")

print Cat.get_all_cats # => array of our cat instances 


0



