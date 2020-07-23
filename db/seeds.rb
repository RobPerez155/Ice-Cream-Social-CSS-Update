# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Region.create(name:"North America", image_url:"test.com")
Region.create(name:"South America", image_url:"test.com")
Region.create(name:"Africa", image_url:"test.com")
Region.create(name:"Oceania", image_url:"test.com")
Region.create(name:"Europe", image_url:"test.com")
Region.create(name:"Asia", image_url:"test.com")

Flavor.create(name: "Cold Ice Cream", image_url: "test.com", description: "it's cold", region_id: "1")
Flavor.create(name: "Spanish Ice Cream", image_url: "test.com", description: "it's spicy", region_id: "2")
Flavor.create(name: "Africa Ice Cream", image_url: "test.com", description: "it's the original", region_id: "3")
