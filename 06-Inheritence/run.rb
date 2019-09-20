require 'pry'
require_relative './app.rb'

fido = AnimalKindom::Dog.new("Fido", 5) #should swim
fluffy = AnimalKindom::Cat.new("Fluffy", 2)
goldie = AnimalKindom::Fish.new("Golide", 3) #should swim
jeff = AnimalKindom::Animal.new("Jeff", "giraffe", 10)

snoop_dog = Rapper::Dog.new("Snoop Dog")
pitbull = Rapper::Dog.new("Pitbull")
sparky = AnimalKindom::Dog.new("Sparky", 4)
binding.pry
0
