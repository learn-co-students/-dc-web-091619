require 'pry'

class Owner
  # code goes here
  attr_reader :name, :species

   # Getter method
  #  def name
  #   @name
  # end

  @@all = []

  def self.all 
    @@all
  end

  def self.reset_all
    # @@all = []
    self.all.clear
    # @@all.clear
  end

  def self.count
    self.all.length
    # @@all.length
  end

  def initialize(name)
    @name = name
    @species = "human"
    @@all << self
  end

  def say_species
    "I am a #{self.species}."
  end

  def cats
    # find all cats that belong to this owner instance
    # binding.pry
    # select filters and returns a new array
    Cat.all.select do |kitten|
      kitten.owner == self
    end
  end

  def dogs 
    Dog.all.select do |dog|
      # dog if dog.owner == self
      if dog.owner == self
        dog
      end
      
    end
  end


  def buy_cat(name)
    Cat.new(name, self)
  end

  def buy_dog(name)
    Dog.new(name, self)
  end

  def walk_dogs
    self.dogs.each do |dog| 
      dog.mood = "happy" 
    end
  end

  def feed_cats
    self.cats.each do |cat| 
      cat.mood = "happy" 
    end
  end

  def sell_pets
    pets = self.dogs + self.cats

    pets.each do |pet|
      pet.mood = "nervous"
      pet.owner = nil
    end
  end

  def list_pets
    "I have #{self.dogs.count} dog(s), and #{self.cats.count} cat(s)."
  end



  



  
  

end