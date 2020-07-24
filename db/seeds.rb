# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

north_america = Region.create(name:"North America", image_url:"test.com")
south_america = Region.create(name:"South America", image_url:"test.com")
africa = Region.create(name:"Africa", image_url:"test.com")
oceania = Region.create(name:"Oceania", image_url:"test.com")
europe = Region.create(name:"Europe", image_url:"test.com")
asia = Region.create(name:"Asia", image_url:"test.com")

scorpion = Flavor.create(name: "Scorpion", description: "Not for the faint of heart, there is a spicy ice cream parlor in Taiwan with seven levels of spiciness to choose from. One of which is Scorpion, aka level 7, aka suicide hot. If you thought eating ice cream was only for pleasure, this place will prove you wrong.", image_url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAovth1.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f", region: asia)

frankincense = Flavor.create(name: "Frankincense", description: "Though American essential oils producer Trygve Harris was initially drawn to this Middle Eastern tree for its aroma, he soon found it to be a popular ingredient for ice cream as well. Frankincense is used for meditation, and the treat offers the same cooling effect with spicy orange notes. Harris serves it each summer at a stand at Oman’s biggest frankincense market.", image_url: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fglobaltableadventure.com%2Frecipe%2Ffrankincense-ice-cream%2F&psig=AOvVaw0AzWR6deQggfVR0-Q8P3Z8&ust=1595687158262000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjY54OM5uoCFQAAAAAdAAAAABAE", region: asia)

vietnamese_coffee = Flavor.create(name: "Vietnamese Coffee", description: "And the award for randomest ice cream combo goes to...Paul's Homemade Ice Cream in Johannesburg, South Africa! People seem to really enjoy the Vietnamese coffee flavor with Oreos", image_url: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fglobaltableadventure.com%2Frecipe%2Ffrankincense-ice-cream%2F&psig=AOvVaw0AzWR6deQggfVR0-Q8P3Z8&ust=1595687158262000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjY54OM5uoCFQAAAAAdAAAAABAE", region: africa)

peach_and_jalapeno = Flavor.create(name: "Peach and Jalapeno", description: "Just peach and jalapeno ", image_url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAovy0b.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f", region: europe)

crocodile_egg_durian = Flavor.create(name: "Crocodile Egg & Durian", description: "Sweet Spot Ice Cream in the Philippines uses real crocodile eggs to make their ice cream, claiming that they are healthier than chicken eggs. Combined with the sweet taste of the repulsive-smelling Durian fruit, it's one exotic flavor we're not sure how to feel about", image_url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAovy0r.img?h=416&w=799&m=6&q=60&u=t&o=f&l=f", region: oceania)
