module AnimalKindom
    class Animal
        attr_reader :name, :species, :age
        def initialize(name, species, age)
            @name = name 
            @species = species 
            @age = age
        end 

        def walk
            puts "taking a walk"
        end 

        def speak 
            puts "Hello, good day"
        end 
    end 

    module Swim 
        def swim
            puts "splish splash"
        end 
    end 

    module Purr
        include Swim
        
        def purr
            puts "purrr"
            self.swim
        end 
    end 

    class Dog < Animal
        include Swim 
        def initialize(name, age)
            super(name, "dog", age) #call the initialize method of Animal class
        end 

        def wag_tail
            puts "swish..."
        end 

        def speak 
            puts "bow wow"
            super #print out hello, good day
        end 
    end 

    class Cat < Animal 
        include Purr, Swim
        def initialize(name, age)
            super(name, "cat", age)
        end 
    end 

    class Fish < Animal
        include Swim 
        def initialize(name, age)
            super(name, "fish", age)
        end
    end
end 

module Rapper
    class Dog
        def initialize(stage_name)
            @stage_name = stage_name
        end
    end 
end 