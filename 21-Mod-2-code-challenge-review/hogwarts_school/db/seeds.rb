# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.destroy_all

g = House.find_or_create_by(name: 'Gryffindor', description: 'all the cool kids belong to this house')
r = House.find_or_create_by(name: 'Ravenclaw', description: 'all the smart kids')
h = House.find_or_create_by(name: 'HufflePuff', description: 'all the nice ones')
s = House.find_or_create_by(name: 'Slytherin', description: 'all the sketchy kids')

harry = Student.create(first_name: 'Harry', last_name: 'Potter', year: 1, house: g)
cedric = Student.create(first_name: 'Cedric', last_name: 'Diggory', year: 1, house: h)
luna = Student.create(first_name: 'Luna', last_name: 'Lovegood', year: 1, house: r)
draco = Student.create(first_name: 'Draco', last_name: 'Malfoy', year: 1, house_id: s.id)


