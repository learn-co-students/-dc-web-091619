require 'require_all'
require_relative '../config/environment.rb'
require_relative '../lib/author.rb'

# Book.destroy_all

Book.find_or_create_by(title: "Remains of the Day", rating: 8)
Book.find_or_create_by(title: "Wuthering Heights", rating: 0)
Book.find_or_create_by(title: "HP & The Sorcerer's Stone", rating: 9)
Book.find_or_create_by(title: "HP & Chamber of Secrets", rating: 8)
Book.find_or_create_by(title: "HP & Prisoner of Azkaban", rating: 10)
Book.find_or_create_by(title: "Frankenstein", rating: 1)
Book.find_or_create_by(title: "Snow Crash", rating: 3)
