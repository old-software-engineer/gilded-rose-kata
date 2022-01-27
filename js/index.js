const {
    AgedBrie,
    OtherItem,
    BackstagePass,
    SulfarasItem,
    ConjuredItem,
    Item,
} = require('./items/index');
  
class Shop {
constructor(items = []) {
    this.items = items.map((item) => {
    switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros': return new SulfarasItem();
        case 'Aged Brie': return new AgedBrie(item.sellIn, item.quality);
        case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePass(item.sellIn, item.quality);
        case 'Conjured Item': return new ConjuredItem(item.name, item.sellIn, item.quality);
        default: return new OtherItem(item.name, item.sellIn, item.quality);
    }
    });
}

updateQuality(update) {
    if(update){
     this.items.forEach((item) => item.updateItem());
    }
    return this.items;
}
}
  
const items = [
    ['+5 Dexterity Vest', 10, 20],
    ['Aged Brie', 2, 0],
    ['Elixir of the Mongoose', 5, 7],
    ['Sulfuras, Hand of Ragnaros', 0, 80],
    ['Sulfuras, Hand of Ragnaros', -1, 80],
    ['Backstage passes to a TAFKAL80ETC concert', 15, 20],
    ['Backstage passes to a TAFKAL80ETC concert', 10, 49],
    ['Backstage passes to a TAFKAL80ETC concert', 5, 49],
    ['Conjured Mana Cake', 3, 6]
]


const days = 6

for (let i = 0; i < days; i++) {
    console.log(`---------------items for day ${i}--------------------------`)
    
    for(let j=0; j< items.length; j++){
        let data = new Shop([new Item(items[j][0],items[j][1],items[j][2])]).updateQuality(j)
       
        console.log(`${data[0].name}, ${data[0].sellIn}, ${data[0].quality}`)
    }
    console.log("\n")
}
