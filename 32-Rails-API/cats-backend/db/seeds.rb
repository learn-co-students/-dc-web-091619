# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

c1 = Cat.create(name: "Juju", breed: "Tabby", parent_name: "Jenny", image: "https://www.petmd.com/sites/default/files/Overweight%20tabby%20cat.jpg")
c2 = Cat.create(name: "Felix", breed: "Persian", parent_name: "Ann", image: "https://geniusvets.s3.amazonaws.com/gv-cat-breeds/Persian-1.jpg")
c3 = Cat.create(name: "Chester", breed: "Russian Blue", parent_name: "Paul", image: "https://petplaceimages-embracepetinsura1.netdna-ssl.com/wp-content/uploads/2018/11/AdobeStock_112943750-1024x680.jpeg")
c4 = Cat.create(name: "Garfield", breed: "Hungry", parent_name: "Joseph", image: "https://images-na.ssl-images-amazon.com/images/I/917iZaaFOgL._SL1500_.jpg")

h1 = Hobby.create(name: "Eating", description: "throughly enoying food")
h2 = Hobby.create(name: "Hunting", description: "throughly enoying hunting")
h3 = Hobby.create(name: "Knocking things over", description: "*crash*")

CatHobby.create(cat_id: c1.id, hobby_id: h1.id)
CatHobby.create(cat_id: c1.id, hobby_id: h2.id)
CatHobby.create(cat_id: c1.id, hobby_id: h3.id)
CatHobby.create(cat_id: c2.id, hobby_id: h2.id)
CatHobby.create(cat_id: c2.id, hobby_id: h3.id)
CatHobby.create(cat_id: c3.id, hobby_id: h3.id)
CatHobby.create(cat_id: c4.id, hobby_id: h2.id)
CatHobby.create(cat_id: c4.id, hobby_id: h3.id)
