import ShopItem from "./ShopItem"

function ShopsList () {
return (
    <div className="shops-list">
   
        <ShopItem 
            title="Parduotuve 1" 
            phone="+370563256451" 
            email="shop1@parduotuve.lt"
            address="Rotušės aikštė 1, Kaunas"
            mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
            />
        <ShopItem 
            title="Parduotuve 2" 
            phone="+370563256452" 
            email="shop2@parduotuve.lt"
            address="Rotušės aikštė 1, Kaunas"
            mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
            />
        <ShopItem 
            title="Parduotuve 3" 
            phone="+370563256453" 
            email="shop3@parduotuve.lt"
            address="Rotušės aikštė 1, Kaunas"
            mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
            />
        <ShopItem 
            title="Parduotuve 4" 
            phone="+370563256454" 
            email="shop4@parduotuve.lt"
            address="Rotušės aikštė 1, Kaunas"
            mapLink="https://goo.gl/maps/9qJ8dUKJLZSjqHkD7"
            />

  </div>
)

}
export default ShopsList 